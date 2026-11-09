import React from 'react';
import AdminLoginForm from '../../components/organisms/AdminLoginForm';

export default function AdminLoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}
    >
      <AdminLoginForm />
    </div>
  );
}
