import { initialCases, activityLogs, defaultPlayerUser, operatorUser, initialNotifications } from './mockData';

const STORAGE_CASES_KEY = 'dv_cases_data';
const STORAGE_PLAYER_KEY = 'dv_player_data';
const STORAGE_LOGS_KEY = 'dv_logs_data';
const STORAGE_NOTIFS_KEY = 'dv_notifs_data';

function getStoredData(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setStoredData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
}

export const apiService = {
  // Cases (RF004, RF005)
  getCases: () => {
    return getStoredData(STORAGE_CASES_KEY, initialCases);
  },

  getCaseById: (id) => {
    const cases = getStoredData(STORAGE_CASES_KEY, initialCases);
    return cases.find(c => c.id === id) || null;
  },

  updateCaseStatus: (caseId, status, rejectionReason = '', operatorName = 'Paola Castro') => {
    const cases = getStoredData(STORAGE_CASES_KEY, initialCases);
    const updated = cases.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          status,
          rejectionReason: status === 'REJECTED' ? rejectionReason : undefined,
          reviewedBy: operatorName,
          reviewedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
        };
      }
      return c;
    });
    setStoredData(STORAGE_CASES_KEY, updated);

    // Register log (RF004, RF005)
    const logs = getStoredData(STORAGE_LOGS_KEY, activityLogs);
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      operator: operatorName,
      action: status === 'APPROVED' ? 'APROBACIÓN_EXPEDIENTE' : 'RECHAZO_EXPEDIENTE',
      caseId,
      detail: status === 'APPROVED' 
        ? 'Expediente aprobado manualmente tras inspección visual satisfactoria.'
        : `Expediente rechazado: ${rejectionReason}`
    };
    setStoredData(STORAGE_LOGS_KEY, [newLog, ...logs]);

    // Send notification to player (RF006)
    apiService.addNotification({
      title: status === 'APPROVED' ? '¡Tu Cuenta ha sido Aprobada!' : 'Dictamen de Verificación KYC',
      description: status === 'APPROVED'
        ? 'Tu identidad fue validada por el oficial de cumplimiento. Ya puedes realizar retiros sin límite.'
        : `Solicitud rechazada: ${rejectionReason}`,
      category: status === 'APPROVED' ? 'SUCCESS' : 'ALERT',
      actionUrl: '/kyc/status',
      actionLabel: 'Ver Estado'
    });

    return updated;
  },

  requestAdditionalDoc: (caseId, note, operatorName = 'Paola Castro') => {
    const cases = getStoredData(STORAGE_CASES_KEY, initialCases);
    const updated = cases.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          status: 'ACTION_REQUIRED',
          actionRequiredNote: note,
          reviewedBy: operatorName,
          reviewedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
        };
      }
      return c;
    });
    setStoredData(STORAGE_CASES_KEY, updated);

    // Register Log
    const logs = getStoredData(STORAGE_LOGS_KEY, activityLogs);
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      operator: operatorName,
      action: 'SOLICITUD_DOC_ADICIONAL',
      caseId,
      detail: `Se solicitó documentación complementaria: ${note}`
    };
    setStoredData(STORAGE_LOGS_KEY, [newLog, ...logs]);

    // Update Player Status (RF005, RF006)
    const player = getStoredData(STORAGE_PLAYER_KEY, defaultPlayerUser);
    setStoredData(STORAGE_PLAYER_KEY, { ...player, kycStatus: 'ACTION_REQUIRED' });

    // Push notification (RF006)
    apiService.addNotification({
      title: 'Documentación Adicional Requerida',
      description: note,
      category: 'ACTION_REQUIRED',
      actionUrl: '/kyc/wizard',
      actionLabel: 'Cargar Documento'
    });

    return updated;
  },

  assignCase: (caseId, operatorName) => {
    const cases = getStoredData(STORAGE_CASES_KEY, initialCases);
    const updated = cases.map(c => (c.id === caseId ? { ...c, assignedTo: operatorName } : c));
    setStoredData(STORAGE_CASES_KEY, updated);
    return updated;
  },

  // Player & KYC Flow (RF001, RF002, RF003)
  getPlayer: () => {
    return getStoredData(STORAGE_PLAYER_KEY, defaultPlayerUser);
  },

  submitKycApplication: (kycData) => {
    const player = getStoredData(STORAGE_PLAYER_KEY, defaultPlayerUser);
    const updatedPlayer = {
      ...player,
      ...kycData,
      kycStatus: 'PENDING'
    };
    setStoredData(STORAGE_PLAYER_KEY, updatedPlayer);

    // Also add to backoffice queue (RF002, RF004)
    const cases = getStoredData(STORAGE_CASES_KEY, initialCases);
    const newCase = {
      id: `KYC-${Math.floor(1000 + Math.random() * 9000)}`,
      caseType: 'PROACTIVE_KYC',
      priority: 'MEDIUM',
      assignedTo: 'Sin Asignar',
      applicant: {
        name: player.name,
        email: player.email,
        phone: kycData.phone || '+57 311 000 0000',
        avatar: player.avatar,
        documentType: kycData.documentType || 'Cédula de Ciudadanía',
        documentNumber: kycData.documentNumber || '1.092.831.002',
        birthDate: kycData.birthDate || '1998-05-14',
        nationality: 'Colombiana',
        address: kycData.address || 'Carrera 7 #72-41, Bogotá'
      },
      status: 'PENDING',
      riskLevel: 'LOW',
      riskScore: 16,
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      documents: {
        front: kycData.frontUrl || '/img/winarena_hero_bg.png',
        back: kycData.backUrl || '/img/winarena_hero_bg.png',
        selfie: kycData.selfieUrl || '/img/user_avatar.jpg',
        proofAddress: kycData.proofAddressUrl || '/img/winarena_hero_bg.png'
      },
      biometrics: {
        faceMatchConfidence: 94.8,
        livenessDetected: true
      },
      ocrResult: {
        nameMatch: true,
        mrzChecksumValid: true,
        expiryDateValid: true
      }
    };
    setStoredData(STORAGE_CASES_KEY, [newCase, ...cases]);

    // Send confirmation notification (RF006)
    apiService.addNotification({
      title: 'Expediente KYC Enviado Exitosamente',
      description: 'Tu solicitud ha entrado a la cola de verificación. El tiempo estimado de respuesta es menor a 5 minutos.',
      category: 'INFO',
      actionUrl: '/kyc/status',
      actionLabel: 'Ver Estado'
    });

    return updatedPlayer;
  },

  // Notifications (RF006)
  getNotifications: () => {
    return getStoredData(STORAGE_NOTIFS_KEY, initialNotifications);
  },

  markNotificationAsRead: (id) => {
    const notifs = getStoredData(STORAGE_NOTIFS_KEY, initialNotifications);
    const updated = notifs.map(n => (n.id === id ? { ...n, read: true } : n));
    setStoredData(STORAGE_NOTIFS_KEY, updated);
    return updated;
  },

  markAllNotificationsAsRead: () => {
    const notifs = getStoredData(STORAGE_NOTIFS_KEY, initialNotifications);
    const updated = notifs.map(n => ({ ...n, read: true }));
    setStoredData(STORAGE_NOTIFS_KEY, updated);
    return updated;
  },

  addNotification: (notif) => {
    const notifs = getStoredData(STORAGE_NOTIFS_KEY, initialNotifications);
    const newNotif = {
      id: `NOTIF-${Date.now().toString().slice(-4)}`,
      timestamp: 'Justo ahora',
      read: false,
      ...notif
    };
    const updated = [newNotif, ...notifs];
    setStoredData(STORAGE_NOTIFS_KEY, updated);
    return updated;
  },

  // Activity Logs (RF005)
  getActivityLogs: () => {
    return getStoredData(STORAGE_LOGS_KEY, activityLogs);
  },

  // Operator (RF001)
  getOperatorUser: () => {
    return operatorUser;
  }
};
