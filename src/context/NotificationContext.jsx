import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/api';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const refreshNotifications = () => {
    setNotifications(apiService.getNotifications());
  };

  useEffect(() => {
    refreshNotifications();
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    const updated = apiService.markNotificationAsRead(id);
    setNotifications(updated);
  };

  const markAllAsRead = () => {
    const updated = apiService.markAllNotificationsAsRead();
    setNotifications(updated);
  };

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        isDrawerOpen,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        refreshNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}
