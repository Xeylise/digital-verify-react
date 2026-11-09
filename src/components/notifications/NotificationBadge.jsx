import React from 'react';

/**
 * NotificationBadge component.
 * Visual unread count indicator or red status dot for alerts.
 *
 * @param {Object} props - Component properties.
 * @param {number} [props.count=0] - Number of unread alerts.
 * @param {boolean} [props.dotOnly=false] - Whether to render a minimalist indicator dot without numeric count.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element|null} The rendered badge or null when count is zero.
 */
export default function NotificationBadge({
  count = 0,
  dotOnly = false,
  className = '',
}) {
  if (count <= 0) return null;

  if (dotOnly) {
    return (
      <span
        className={`position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-dark rounded-circle ${className}`}
        style={{ width: '8px', height: '8px' }}
      ></span>
    );
  }

  return (
    <span
      className={`badge rounded-pill bg-danger ${className}`}
      style={{ fontSize: '10px', padding: '3px 6px', fontWeight: 'bold' }}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
}
