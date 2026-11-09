import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar component.
 * Lateral navigation drawer rendering contextual menu routes for players or internal analysts.
 *
 * @param {Object} props - Component properties.
 * @param {('client'|'backoffice')} [props.mode='backoffice'] - Active routing domain.
 * @returns {JSX.Element} The rendered navigation sidebar.
 */
export default function Sidebar({ mode = 'backoffice' }) {
  if (mode === 'client') {
    return (
      <aside className="player-sidebar p-3" style={{ width: '240px', backgroundColor: '#090e17', borderRight: '1px solid var(--winarena-border)', minHeight: 'calc(100vh - 70px)' }}>
        <div className="nav flex-column gap-1">
          <NavLink to="/home" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-gamepad me-2"></i> Esports
          </NavLink>
          <NavLink to="/my_bets" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-ticket me-2"></i> Mis Apuestas
          </NavLink>
          <NavLink to="/kyc_status_review" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-shield-halved me-2"></i> Estado KYC
          </NavLink>
          <NavLink to="/notifications" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="fa-regular fa-bell me-2"></i> Notificaciones
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="fa-regular fa-user me-2"></i> Mi Perfil
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="fa-solid fa-gear me-2"></i> Configuración
          </NavLink>
        </div>
      </aside>
    );
  }

  return (
    <aside className="backoffice-sidebar p-3" style={{ width: '250px', backgroundColor: '#070a14', borderRight: '1px solid var(--winarena-border)', minHeight: 'calc(100vh - 70px)' }}>
      <div className="text-muted small px-3 mb-2 text-uppercase fw-bold" style={{ fontSize: '10px', letterSpacing: '0.8px' }}>
        Auditoría y Control
      </div>
      <div className="nav flex-column gap-1">
        <NavLink to="/dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-chart-pie me-2"></i> Dashboard
        </NavLink>
        <NavLink to="/queue" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-list-check me-2"></i> Cola de Casos
        </NavLink>
        <NavLink to="/all_cases" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-folder-open me-2"></i> Todos los Casos
        </NavLink>
        <NavLink to="/reports" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-chart-line me-2"></i> Reportes
        </NavLink>
        <NavLink to="/activity_log" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-clock-rotate-left me-2"></i> Historial / Auditoría
        </NavLink>
        <NavLink to="/settings_employee" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <i className="fa-solid fa-sliders me-2"></i> Configuración
        </NavLink>
      </div>
    </aside>
  );
}
