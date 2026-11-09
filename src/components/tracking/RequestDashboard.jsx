import React from 'react';

/**
 * RequestDashboard component.
 * High-level executive KPI metrics row reporting case volumes, processing trends, and SLAs.
 *
 * @param {Object} props - Component properties.
 * @param {Array<{title: string, value: string, trend: string, trendUp: boolean}>} [props.metrics] - KPI records.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered KPI metrics container.
 */
export default function RequestDashboard({
  metrics = [
    { title: 'Pending Cases', value: '12', trend: '+3', trendUp: true },
    { title: 'In Review', value: '6', trend: '-2', trendUp: false },
    { title: 'Completed Cases', value: '38', trend: '+7', trendUp: true },
    { title: 'Rejected', value: '3', trend: '-1', trendUp: false },
    { title: 'SLA Compliance', value: '98.5%', trend: '+0.5%', trendUp: true },
    { title: 'Avg Time to Decision', value: '4m 12s', trend: '-25s', trendUp: false },
    { title: 'Auto vs Manual', value: '82% / 18%', trend: 'Stable', trendUp: true },
  ],
  className = '',
}) {
  return (
    <div className={`kpi-row-container ${className}`}>
      {metrics.map((kpiItem, index) => (
        <div key={index} className="kpi-card-winarena">
          <div className="kpi-title">{kpiItem.title}</div>
          <div className="kpi-value-large">{kpiItem.value}</div>
          <div className={kpiItem.trendUp ? 'kpi-trend-up' : 'kpi-trend-down'}>
            <i className={`fa-solid ${kpiItem.trendUp ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i> {kpiItem.trend}
            <span className="text-muted ms-1" style={{ fontSize: '10px' }}>vs last 7 days</span>
          </div>
        </div>
      ))}
    </div>
  );
}
