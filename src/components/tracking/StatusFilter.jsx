import React from 'react';

/**
 * StatusFilter component.
 * Horizontal filter buttons allowing analysts to segregate cases by operational status.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.activeFilter='all'] - Identifier of the active filter.
 * @param {Function} props.onFilterChange - Callback invoked when a tab filter is chosen.
 * @param {Array<{id: string, label: string}>} [props.filters] - Available filter tab definitions.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered filter toolbar.
 */
export default function StatusFilter({
  activeFilter = 'all',
  onFilterChange,
  filters = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'in_review', label: 'In Review' },
    { id: 'fraud_review', label: 'Fraud Review' },
    { id: 'proactive_kyc', label: 'Proactive KYC' },
    { id: 'assigned_to_me', label: 'Assigned to Me' },
  ],
  className = '',
}) {
  return (
    <div className={`d-flex gap-2 flex-wrap pb-2 ${className}`} id="dashboardTabs">
      {filters.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`tab-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
          onClick={() => onFilterChange && onFilterChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
