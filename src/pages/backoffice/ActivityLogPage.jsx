import React from 'react';

export default function ActivityLogPage() {
  const logs = [
    { timestamp: '2026-05-26 14:23:10', auditor: 'Paola Castro', event: 'Verification Approved', caseId: 'DV-1022', details: 'Full identity and address match validated. Case resolved.' },
    { timestamp: '2026-05-26 11:15:44', auditor: 'Paola Castro', event: 'Document Requested', caseId: 'DV-1023', details: 'Requested utility bill reissue due to blurred address.' },
    { timestamp: '2026-05-25 17:02:19', auditor: 'System Automatic', event: 'Ingestion Completed', caseId: 'DV-1020', details: 'Biometrics matched with 96.4% confidence score.' },
    { timestamp: '2026-05-25 09:40:02', auditor: 'Paola Castro', event: 'Case Reassigned', caseId: 'DV-1019', details: 'Assigned to level 2 compliance officer.' }
  ];

  return (
    <>
      <div className="text-start mb-4">
        <h2 className="fw-extrabold text-white mb-1" style={{ fontSize: '26px' }}>Activity Log</h2>
        <p className="text-muted small mb-0">Last records and actions on dashboard</p>
      </div>

      <div className="activity-filter-card">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
          <div>
            <label className="activity-label">DATE RANGE</label>
            <div className="date-range-container">
              <i className="fa-regular fa-calendar date-range-icon"></i>
              <input type="text" id="dateRangeInput" className="date-range-input" defaultValue="May 20, 2026 - May 26, 2026" />
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button type="button" className="btn-clear-filter" onClick={() => alert('Filter reset.')} title="Clear date filter">
              <i className="fa-solid fa-xmark"></i> Clear
            </button>
            <button type="button" className="btn-export-outline" onClick={() => alert('Exporting activity logs CSV...')}>
              <i className="fa-solid fa-download"></i> Export CSV
            </button>
            <button type="button" id="filterDateBtn" className="btn-filter-action" onClick={() => alert('Date filter applied.')}>
              <i className="fa-solid fa-filter"></i> Filter
            </button>
          </div>
        </div>
      </div>

      <div className="cases-table-card text-start">
        <div className="table-responsive">
          <table className="cases-table">
            <thead>
              <tr>
                <th style={{ width: '18%' }}>TIMESTAMP</th>
                <th style={{ width: '18%' }}>AUDITOR</th>
                <th style={{ width: '20%' }}>EVENT TYPE</th>
                <th style={{ width: '14%' }}>CASE ID</th>
                <th style={{ width: '30%' }}>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l, idx) => (
                <tr key={idx}>
                  <td className="text-muted small">{l.timestamp}</td>
                  <td className="fw-bold text-white small">{l.auditor}</td>
                  <td>
                    <span className="badge" style={{ backgroundColor: 'rgba(118, 51, 239, 0.15)', color: 'var(--winarena-primary-hover)', fontSize: '11px' }}>
                      {l.event}
                    </span>
                  </td>
                  <td style={{ color: 'var(--winarena-primary-hover)', fontWeight: 700 }}>{l.caseId}</td>
                  <td className="text-muted small">{l.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
          <span className="text-muted small">Showing 1 to 4 of 128 entries</span>
        </div>
      </div>
    </>
  );
}
