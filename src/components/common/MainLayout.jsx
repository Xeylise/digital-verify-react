import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

/**
 * MainLayout component.
 * Core structural shell managing top bar, sidebar navigation, and main content viewports.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Child page views.
 * @param {('client'|'backoffice'|'plain')} [props.mode='client'] - Application domain.
 * @param {boolean} [props.showSidebar=true] - Whether to display the lateral drawer.
 * @returns {JSX.Element} The rendered master layout shell.
 */
export default function MainLayout({
  children,
  mode = 'client',
  showSidebar = true,
}) {
  if (mode === 'plain') {
    return (
      <div style={{ backgroundColor: 'var(--winarena-bg)', color: 'var(--winarena-text)', minHeight: '100vh' }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--winarena-bg)', color: 'var(--winarena-text)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header mode={mode} />
      <div className="d-flex flex-grow-1">
        {showSidebar && <Sidebar mode={mode} />}
        <main className="flex-grow-1 p-3 p-md-4" style={{ overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
