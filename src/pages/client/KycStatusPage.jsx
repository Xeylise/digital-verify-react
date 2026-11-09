import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useKyc } from '../../context/KycContext';
import StatusBadge from '../../components/atoms/StatusBadge';
import KycLifecycleTracker from '../../components/organisms/KycLifecycleTracker';
import Avatar from '../../components/atoms/Avatar';
import Button from '../../components/atoms/Button';
import { ShieldCheck, RefreshCw, ArrowLeft, ExternalLink } from 'lucide-react';

export default function KycStatusPage() {
  const { player } = useAuth();
  const { resetKyc } = useKyc();

  const status = player.kycStatus || 'PENDING';

  return (
    <div className="container" style={{ padding: '40px 20px 80px', maxWidth: 840 }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: 28 }}>
        <Link to="/" className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          <ArrowLeft size={16} />
          Volver a Inicio
        </Link>
        <StatusBadge status={status} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        {/* User Card */}
        <div className="card-glass" style={{ padding: 24 }}>
          <div className="flex items-center gap-4" style={{ marginBottom: 16 }}>
            <Avatar src={player.avatar} alt={player.name} size={54} isOnline />
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#ffffff' }}>
                {player.name}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                @{player.username} • {player.email}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 14, fontSize: 12 }}>
            <div className="flex justify-between" style={{ marginBottom: 6 }}>
              <span style={{ color: 'var(--text-muted)' }}>Estado de Cuenta:</span>
              <strong style={{ color: '#10B981' }}>Activa</strong>
            </div>
            <div className="flex justify-between" style={{ marginBottom: 6 }}>
              <span style={{ color: 'var(--text-muted)' }}>Saldo Disponible:</span>
              <strong style={{ color: '#ffffff' }}>${player.balance?.toLocaleString()} {player.currency}</strong>
            </div>
            <div className="flex justify-between">
              <span style={{ color: 'var(--text-muted)' }}>Nivel de Verificación:</span>
              <strong style={{ color: 'var(--primary-hover)' }}>Nivel 2 (Biometría + Domicilio)</strong>
            </div>
          </div>
        </div>

        {/* Status Highlights */}
        <div className="panel-purple-gradient flex flex-col justify-between" style={{ padding: 24 }}>
          <div>
            <div className="flex items-center gap-2" style={{ color: '#A855F7', fontWeight: 800, fontSize: 14, marginBottom: 8 }}>
              <ShieldCheck size={20} />
              <span>DICTAMEN DEL SISTEMA DIGITAL VERIFY (RF005)</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {status === 'APPROVED'
                ? '¡Felicidades! Tu identidad ha sido verificada satisfactoriamente por nuestro equipo de cumplimiento.'
                : status === 'ACTION_REQUIRED'
                ? 'Atención: Se requiere documentación complementaria según notificación enviada por el oficial.'
                : status === 'REJECTED'
                ? 'Tu solicitud anterior fue rechazada. Por favor revisa los motivos notificados y vuelve a intentar.'
                : 'Tu solicitud se encuentra en cola de análisis por parte de la mesa de control de oficiales de cumplimiento.'}
            </p>
          </div>

          <div className="flex items-center gap-3" style={{ marginTop: 16 }}>
            {(status === 'REJECTED' || status === 'ACTION_REQUIRED') && (
              <Link to="/kyc/wizard" onClick={resetKyc}>
                <Button variant="primary" size="sm" icon={RefreshCw}>
                  Subir Documentos
                </Button>
              </Link>
            )}
            <Link to="/admin/queue">
              <Button variant="secondary" size="sm" icon={ExternalLink}>
                Ver Cola Oficiales (Demo)
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Real-time Lifecycle Tracker (RF005) */}
      <KycLifecycleTracker status={status} />
    </div>
  );
}
