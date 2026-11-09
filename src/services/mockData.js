export const initialCases = [
  {
    id: "KYC-8841",
    caseType: "PROACTIVE_KYC", // 'PROACTIVE_KYC' | 'FRAUD_REVIEW' (RF004)
    priority: "MEDIUM", // 'HIGH' | 'MEDIUM' | 'LOW' (RF005)
    assignedTo: "Paola Castro", // (RF004)
    applicant: {
      name: "Alejandro Morales Rivera",
      email: "a.morales@gamers.co",
      phone: "+57 312 458 9921",
      avatar: "/img/user_avatar.jpg",
      documentType: "Cédula de Ciudadanía",
      documentNumber: "1.020.849.214",
      birthDate: "1997-04-12",
      nationality: "Colombiana",
      address: "Cra 15 #85-32, Bogotá D.C."
    },
    status: "PENDING", // PENDING | REVIEWING | ACTION_REQUIRED | APPROVED | REJECTED
    riskLevel: "LOW",
    riskScore: 14,
    submittedAt: "2026-11-07 18:24",
    documents: {
      front: "/img/winarena_hero_bg.png",
      back: "/img/winarena_hero_bg.png",
      selfie: "/img/user_avatar.jpg",
      proofAddress: "/img/winarena_hero_bg.png"
    },
    biometrics: {
      faceMatchConfidence: 96.4,
      livenessDetected: true
    },
    ocrResult: {
      nameMatch: true,
      mrzChecksumValid: true,
      expiryDateValid: true
    }
  },
  {
    id: "KYC-8840",
    caseType: "FRAUD_REVIEW",
    priority: "HIGH",
    assignedTo: "Paola Castro",
    applicant: {
      name: "Carlos Eduardo Mendoza",
      email: "carlos.mendoza99@gmail.com",
      phone: "+57 318 642 0019",
      avatar: "/img/user_avatar.jpg",
      documentType: "Cédula de Extranjería",
      documentNumber: "592.831",
      birthDate: "1994-11-03",
      nationality: "Venezolana",
      address: "Av. Santander #54-10, Manizales"
    },
    status: "REVIEWING",
    riskLevel: "HIGH",
    riskScore: 88,
    submittedAt: "2026-11-07 17:50",
    documents: {
      front: "/img/winarena_hero_bg.png",
      back: "/img/winarena_hero_bg.png",
      selfie: "/img/user_avatar.jpg",
      proofAddress: "/img/winarena_hero_bg.png"
    },
    biometrics: {
      faceMatchConfidence: 54.0,
      livenessDetected: false
    },
    ocrResult: {
      nameMatch: false,
      mrzChecksumValid: false,
      expiryDateValid: true
    }
  },
  {
    id: "KYC-8839",
    caseType: "PROACTIVE_KYC",
    priority: "HIGH",
    assignedTo: "Sin Asignar",
    applicant: {
      name: "Valentina Restrepo Gil",
      email: "valen.restrepo@outlook.com",
      phone: "+57 301 774 1209",
      avatar: "/img/employee_avatar.png",
      documentType: "Pasaporte",
      documentNumber: "AP8472910",
      birthDate: "2001-09-28",
      nationality: "Colombiana",
      address: "Calle 10 #43E-12, Medellín"
    },
    status: "ACTION_REQUIRED",
    riskLevel: "MEDIUM",
    riskScore: 45,
    submittedAt: "2026-11-07 16:15",
    actionRequiredNote: "Factura de servicios no legible. Por favor adjunte un PDF o fotografía clara con fecha visible.",
    documents: {
      front: "/img/winarena_hero_bg.png",
      back: "/img/winarena_hero_bg.png",
      selfie: "/img/employee_avatar.png",
      proofAddress: "/img/winarena_hero_bg.png"
    },
    biometrics: {
      faceMatchConfidence: 89.2,
      livenessDetected: true
    },
    ocrResult: {
      nameMatch: true,
      mrzChecksumValid: true,
      expiryDateValid: true
    }
  },
  {
    id: "KYC-8838",
    caseType: "PROACTIVE_KYC",
    priority: "LOW",
    assignedTo: "Paola Castro",
    applicant: {
      name: "Camila Torres Prada",
      email: "ctorres@techcorp.io",
      phone: "+57 320 889 4433",
      avatar: "/img/employee_avatar.png",
      documentType: "Cédula de Ciudadanía",
      documentNumber: "1.098.712.540",
      birthDate: "1999-02-17",
      nationality: "Colombiana",
      address: "Carrera 33 #48-19, Bucaramanga"
    },
    status: "APPROVED",
    riskLevel: "LOW",
    riskScore: 8,
    submittedAt: "2026-11-07 15:30",
    reviewedBy: "Paola Castro",
    reviewedAt: "2026-11-07 15:42",
    documents: {
      front: "/img/winarena_hero_bg.png",
      back: "/img/winarena_hero_bg.png",
      selfie: "/img/employee_avatar.png",
      proofAddress: "/img/winarena_hero_bg.png"
    },
    biometrics: {
      faceMatchConfidence: 98.7,
      livenessDetected: true
    },
    ocrResult: {
      nameMatch: true,
      mrzChecksumValid: true,
      expiryDateValid: true
    }
  },
  {
    id: "KYC-8837",
    caseType: "FRAUD_REVIEW",
    priority: "HIGH",
    assignedTo: "Paola Castro",
    applicant: {
      name: "Felipe Soto Beltrán",
      email: "felipesoto_b@yahoo.com",
      phone: "+57 310 500 2211",
      avatar: "/img/user_avatar.jpg",
      documentType: "Cédula de Ciudadanía",
      documentNumber: "1.144.092.311",
      birthDate: "2003-07-05",
      nationality: "Colombiana",
      address: "Calle 5 #66-10, Cali"
    },
    status: "REJECTED",
    riskLevel: "HIGH",
    riskScore: 94,
    submittedAt: "2026-11-07 14:10",
    reviewedBy: "Paola Castro",
    reviewedAt: "2026-11-07 14:25",
    rejectionReason: "Documento borroso o adulterado en la fecha de expedición.",
    documents: {
      front: "/img/winarena_hero_bg.png",
      back: "/img/winarena_hero_bg.png",
      selfie: "/img/user_avatar.jpg",
      proofAddress: "/img/winarena_hero_bg.png"
    },
    biometrics: {
      faceMatchConfidence: 42.1,
      livenessDetected: false
    },
    ocrResult: {
      nameMatch: false,
      mrzChecksumValid: false,
      expiryDateValid: false
    }
  }
];

export const operatorUser = {
  id: "OP-042",
  name: "Paola Andrea Castro Sarabia",
  username: "psarabia",
  role: "Oficial de Cumplimiento / Backoffice Agent",
  badge: "Senior Verifier",
  avatar: "/img/employee_avatar.png",
  email: "pcastro@digitalverify.internal"
};

export const defaultPlayerUser = {
  id: "USR-77291",
  name: "Juan David Ramírez",
  username: "jdr_gamer",
  email: "juandavid@winarena.gg",
  avatar: "/img/user_avatar.jpg",
  balance: 1450000,
  currency: "COP",
  kycStatus: "ACTION_REQUIRED", // NOT_STARTED, PENDING, ACTION_REQUIRED, APPROVED, REJECTED
  kycStep: 1
};

export const initialNotifications = [
  {
    id: "NOTIF-001",
    title: "Solicitud de Documentación Adicional (RF006)",
    description: "El oficial de cumplimiento ha solicitado adjuntar un comprobante de domicilio más legible o extracto bancario reciente.",
    category: "ACTION_REQUIRED", // 'INFO' | 'SUCCESS' | 'ACTION_REQUIRED' | 'ALERT'
    timestamp: "Hace 15 minutos",
    read: false,
    actionUrl: "/kyc/wizard",
    actionLabel: "Subir Documento Ahora"
  },
  {
    id: "NOTIF-002",
    title: "Expediente KYC Recibido",
    description: "Tus documentos han ingresado a la cola de verificación del equipo de seguridad.",
    category: "INFO",
    timestamp: "Hace 2 horas",
    read: true,
    actionUrl: "/kyc/status",
    actionLabel: "Ver Progreso"
  },
  {
    id: "NOTIF-003",
    title: "Alerta de Seguridad",
    description: "Inicio de sesión detectado desde una nueva dirección IP (Bogotá, Colombia).",
    category: "ALERT",
    timestamp: "Ayer 20:15",
    read: true,
    actionUrl: "/kyc/status",
    actionLabel: "Revisar Actividad"
  }
];

export const activityLogs = [
  {
    id: "LOG-103",
    timestamp: "2026-11-07 17:55:12",
    operator: "Paola Castro",
    action: "SOLICITUD_DOC_ADICIONAL",
    caseId: "KYC-8839",
    detail: "Requerido nuevo soporte de domicilio por ilegibilidad (RF004)."
  },
  {
    id: "LOG-102",
    timestamp: "2026-11-07 15:42:10",
    operator: "Paola Castro",
    action: "APROBACIÓN_EXPEDIENTE",
    caseId: "KYC-8838",
    detail: "Validación biométrica exitosa (98.7%) y verificación OCR coincidente."
  },
  {
    id: "LOG-101",
    timestamp: "2026-11-07 14:25:34",
    operator: "Paola Castro",
    action: "RECHAZO_EXPEDIENTE",
    caseId: "KYC-8837",
    detail: "Rechazado por inconsistencia visual en la cédula (criterio de seguridad R3)."
  }
];
