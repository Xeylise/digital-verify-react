import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import BackofficeNavbar from './BackofficeNavbar';
import BackofficeSidebar from './BackofficeSidebar';
import { useAuth } from '../../context/AuthContext';

export default function BackofficeLayout() {
  const { isOperatorLoggedIn } = useAuth();

  if (!isOperatorLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)' }}>
      <BackofficeNavbar />
      <div style={{ display: 'flex', flex: 1 }}>
        <BackofficeSidebar />
        <main style={{ flex: 1, padding: '28px 32px', overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
