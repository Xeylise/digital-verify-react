import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { operatorUser } from '../services/mockData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Player session
  const [player, setPlayer] = useState(() => apiService.getPlayer());
  const [isPlayerLoggedIn, setIsPlayerLoggedIn] = useState(true);

  // Backoffice operator session
  const [operator, setOperator] = useState(() => apiService.getOperatorUser());
  const [isOperatorLoggedIn, setIsOperatorLoggedIn] = useState(true);

  // Auth Modals for Player
  const [authModalMode, setAuthModalMode] = useState(null); // 'login' | 'register' | null

  const openLoginModal = () => setAuthModalMode('login');
  const openRegisterModal = () => setAuthModalMode('register');
  const closeAuthModal = () => setAuthModalMode(null);

  const loginPlayer = (email, password) => {
    setIsPlayerLoggedIn(true);
    closeAuthModal();
  };

  const logoutPlayer = () => {
    setIsPlayerLoggedIn(false);
  };

  const loginOperator = (username, password) => {
    setIsOperatorLoggedIn(true);
    return true;
  };

  const logoutOperator = () => {
    setIsOperatorLoggedIn(false);
  };

  const updatePlayerData = (newData) => {
    setPlayer(prev => ({ ...prev, ...newData }));
  };

  return (
    <AuthContext.Provider
      value={{
        player,
        isPlayerLoggedIn,
        loginPlayer,
        logoutPlayer,
        updatePlayerData,
        operator,
        isOperatorLoggedIn,
        loginOperator,
        logoutOperator,
        authModalMode,
        openLoginModal,
        openRegisterModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
