import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, Lock, User, ArrowLeft } from 'lucide-react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

export default function AdminLoginForm() {
  const { loginOperator } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('psarabia');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Credenciales incompletas.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      loginOperator(username, password);
      setIsLoading(false);
      navigate('/admin/dashboard');
    }, 600);
  };

  return (
    <div className="card-glass" style={{ maxWidth: 420, width: '100%', padding: 36 }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <img src="/img/logo.svg" alt="Digital Verify" width="36" height="42" style={{ marginBottom: 12 }} />
        <h1 style={{ fontSize: 22, fontWeight: 900, color: '#ffffff' }}>
          Mesa de Control KYC (RF001)
        </h1>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          Acceso Exclusivo para Oficiales y Analistas Internos
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <FormField
          label="Usuario de Oficial / Agente"
          required
          placeholder="psarabia"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={User}
        />

        <FormField
          label="Contraseña Institucional"
          required
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={Lock}
          error={error}
        />

        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={isLoading}
          icon={ShieldCheck}
          style={{ marginTop: 10 }}
        >
          Ingresar al Backoffice
        </Button>
      </form>

      <div style={{ marginTop: 24, textAlign: 'center', borderTop: '1px solid var(--border-color)', paddingTop: 16 }}>
        <Link to="/" className="flex items-center justify-center gap-1" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          <ArrowLeft size={13} />
          Volver a WinArena Jugador
        </Link>
      </div>
    </div>
  );
}
