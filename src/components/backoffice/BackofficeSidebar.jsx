import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ListFilter, 
  FolderKanban, 
  History, 
  BarChart3, 
  Settings,
  ShieldCheck
} from 'lucide-react';

export default function BackofficeSidebar() {
  const links = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/queue', label: 'Cola de Verificación', icon: ListFilter, badge: '5' },
    { to: '/admin/cases', label: 'Todos los Expedientes', icon: FolderKanban },
    { to: '/admin/activity-log', label: 'Registro de Actividad', icon: History },
    { to: '/admin/reports', label: 'Informes y Métricas', icon: BarChart3 }
  ];

  return (
    <aside
      style={{
        width: 250,
        backgroundColor: '#070a14',
        borderRight: '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
        minHeight: 'calc(100vh - 65px)'
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 14, paddingLeft: 8 }}>
        Control Desk & KYC
      </div>

      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: 13,
                fontWeight: 600,
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                backgroundColor: isActive ? 'rgba(118, 51, 239, 0.16)' : 'transparent',
                border: isActive ? '1px solid rgba(118, 51, 239, 0.4)' : '1px solid transparent',
                transition: 'all 0.15s ease'
              })}
            >
              <div className="flex items-center gap-3">
                <Icon size={17} />
                <span>{link.label}</span>
              </div>
              {link.badge && (
                <span
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: 9999
                  }}
                >
                  {link.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* System Status info */}
      <div
        className="card-glass"
        style={{
          marginTop: 'auto',
          padding: 14,
          fontSize: 11,
          backgroundColor: 'rgba(255, 255, 255, 0.02)'
        }}
      >
        <div className="flex items-center gap-2" style={{ color: 'var(--accent-green)', fontWeight: 700, marginBottom: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--accent-green)', display: 'inline-block' }} />
          <span>Motor KYC Activo</span>
        </div>
        <div style={{ color: 'var(--text-dim)' }}>
          Versión v2.4.0-React<br />
          SLA Promedio: 2.4 min
        </div>
      </div>
    </aside>
  );
}
