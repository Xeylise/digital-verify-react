import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#04060b', borderTop: '1px solid var(--border-color)', padding: '40px 0', marginTop: 'auto' }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            style={{
              fontWeight: 900,
              color: '#ffffff',
              background: 'linear-gradient(135deg, var(--primary), #8B5CF6)',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            W
          </div>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            © 2026 WinArena & Digital Verify. Todos los derechos reservados.
          </span>
        </div>

        <div className="flex items-center gap-2" style={{ fontSize: 12, color: 'var(--text-dim)' }}>
          <Shield size={14} color="#10B981" />
          <span>Verificación biométrica y protección de datos según normativa regulatoria vigente.</span>
        </div>
      </div>
    </footer>
  );
}
