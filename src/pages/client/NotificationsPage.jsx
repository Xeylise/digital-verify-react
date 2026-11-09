import React, { useState } from 'react';

export default function NotificationsPage() {
  const [read, setRead] = useState(false);

  return (
    <div className="row justify-content-center">
      <div className="col-md-9 col-lg-8">
        {/* Page Title Area */}
        <div className="notifications-title-area mb-4">
          <h1 className="notifications-title">Notifications</h1>
          <p className="notifications-subtitle">Stay up to date.</p>
        </div>

        {/* Notification Card 1 */}
        <div className={`notification-card mb-4 ${read ? 'opacity-75' : ''}`} id="notification1">
          <div className="notification-header">
            <span className="header-label">Time</span>
            <span className="header-label text-end">Tittle</span>
          </div>
          <div className="notification-meta mb-3">
            <span className="meta-time">2025-13-11<br />08:50</span>
            <span className="meta-title text-end">Digital verify status</span>
          </div>
          <div className="notification-message">
            <div className="message-label mb-2">Message</div>
            <p className="message-text">
              Your previous documentation was reviewed, however, we kindly request to submit a new proof of address from different source. Remember that you'd need to refer to 'Verification status' section and submit new document from there. Once received, we'll be glad to provide updates within 1-2 business days.
            </p>
          </div>
          <div className="notification-action text-end mt-4" id="actionArea1">
            {!read ? (
              <button className="action-btn-mark" onClick={() => setRead(true)}>
                <span>Mark as read</span> <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            ) : (
              <span className="text-muted small"><i className="fa-solid fa-check me-1 text-success"></i> Read</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
