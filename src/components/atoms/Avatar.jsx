import React from 'react';

export default function Avatar({ src, alt, size = 36, borderColor = 'var(--primary)', isOnline = false }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
      <img
        src={src || '/img/user_avatar.jpg'}
        alt={alt || 'Avatar'}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover',
          border: `1.5px solid ${borderColor}`
        }}
      />
      {isOnline && (
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: 'var(--accent-green)',
            border: '2px solid var(--bg-dark)'
          }}
        />
      )}
    </div>
  );
}
