import React, { useEffect, useState } from 'react';

const ErrorLayout = () => {
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setDots(d => (d + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.root}>
      <div
        style={{
          ...styles.card,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.55s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* 404 */}
        <div style={styles.errorCode}>404</div>
        <div style={styles.divider} />

        {/* Mystery avatars */}
        <div style={styles.avatarRow}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                ...styles.avatar,
                marginLeft: i === 0 ? 0 : -14,
                opacity: 1 - i * 0.25,
                zIndex: 3 - i,
              }}
            >
              <span style={styles.avatarQ}>?</span>
            </div>
          ))}
        </div>

        {/* Text */}
        <h1 style={styles.heading}>Page Not Found</h1>
        <p style={styles.subtext}>
          Looks like this connection doesn't exist in your shelf
          {'.'.repeat(dots)}
        </p>

        {/* Badges */}
        <div style={styles.badgeRow}>
          <span style={{ ...styles.badge, ...styles.badgeRed }}>
            ● Route Missing
          </span>
          <span style={{ ...styles.badge, ...styles.badgeGray }}>
            No Friends Here
          </span>
        </div>

        {/* Stat cards */}
        <div style={styles.statsRow}>
          {[
            { value: '0', label: 'Pages Found' },
            { value: '∞', label: 'Wrong Turns' },
            { value: '1', label: 'Lost Soul' },
          ].map(({ value, label }) => (
            <div key={label} style={styles.statCard}>
              <span style={styles.statValue}>{value}</span>
              <span style={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="/" style={styles.btn}>
          + Go Back Home
        </a>
      </div>
    </div>
  );
};

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f6f7',
    padding: 16,
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  card: {
    background: '#fff',
    border: '1px solid #e8eaec',
    borderRadius: 14,
    padding: '48px 40px',
    maxWidth: 460,
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
  },
  errorCode: {
    fontSize: 96,
    fontWeight: 800,
    color: '#e2e8f0',
    lineHeight: 1,
    letterSpacing: '-5px',
    marginBottom: 8,
  },
  divider: {
    width: 40,
    height: 3,
    background: '#2d6a4f',
    borderRadius: 99,
    margin: '0 auto 24px',
  },
  avatarRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '2px solid #fff',
    background: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
  },
  avatarQ: {
    fontSize: 18,
    color: '#94a3b8',
    fontWeight: 700,
  },
  heading: {
    fontSize: 22,
    fontWeight: 700,
    margin: '0 0 8px',
    color: '#1a202c',
    letterSpacing: '-0.4px',
  },
  subtext: {
    fontSize: 14,
    color: '#64748b',
    margin: '0 0 20px',
    lineHeight: 1.6,
    minHeight: 24,
  },
  badgeRow: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
    marginBottom: 28,
  },
  badge: {
    fontSize: 11,
    fontWeight: 600,
    borderRadius: 99,
    padding: '3px 10px',
  },
  badgeRed: {
    background: '#fee2e2',
    color: '#b91c1c',
  },
  badgeGray: {
    background: '#f1f5f9',
    color: '#64748b',
  },
  statsRow: {
    display: 'flex',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    background: '#f8fafc',
    border: '1px solid #e8eaec',
    borderRadius: 10,
    padding: '14px 8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 800,
    color: '#1a202c',
    letterSpacing: '-0.5px',
  },
  statLabel: {
    fontSize: 11,
    color: '#94a3b8',
    fontWeight: 500,
  },
  btn: {
    display: 'inline-block',
    background: '#2d6a4f',
    color: '#fff',
    borderRadius: 8,
    padding: '11px 28px',
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
    letterSpacing: '-0.1px',
  },
};

export default ErrorLayout;
