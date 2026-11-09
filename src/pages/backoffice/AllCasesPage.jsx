import React, { useState } from 'react';
import DocumentViewerModal from '../../components/organisms/DocumentViewerModal';

export default function AllCasesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [reasonFilter, setReasonFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    { id: 'DV-1023', player: 'Santiago Morales', account: '78125', reason: 'fraud_review', reasonLabel: 'Fraud Review', status: 'pending', statusLabel: 'Pending', date: 'May 23, 2026 10:14 AM', owner: 'Unassigned', priority: 'High', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1022', player: 'Paola Castro', account: '66531', reason: 'proactive_kyc', reasonLabel: 'Proactive KYC', status: 'in_review', statusLabel: 'In Review', date: 'May 24, 2026 09:28 AM', owner: 'Jessica Torres', priority: 'Medium', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1020', player: 'Carlos Ramirez', account: '43876', reason: 'proactive_kyc', reasonLabel: 'Proactive KYC', status: 'completed', statusLabel: 'Completed', date: 'May 24, 2026 02:17 PM', owner: 'Carlos Mendoza', priority: 'Low', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1019', player: 'Mateo Gomez', account: '32544', reason: 'proactive_kyc', reasonLabel: 'Proactive KYC', status: 'in_review', statusLabel: 'In Review', date: 'May 25, 2026 08:35 AM', owner: 'Unassigned', priority: 'Medium', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1018', player: 'Daniela Ortiz', account: '90831', reason: 'fraud_review', reasonLabel: 'Fraud Review', status: 'rejected', statusLabel: 'Rejected', date: 'May 25, 2026 11:20 AM', owner: 'Daniel Rojas', priority: 'High', docUrl: '/img/user_avatar.jpg' }
  ];

  const filteredCases = cases.filter(c => {
    const matchSearch = c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        c.account.includes(searchTerm) ||
                        c.player.toLowerCase().includes(searchTerm.toLowerCase());
    const matchReason = reasonFilter === 'all' || c.reason === reasonFilter;
    return matchSearch && matchReason;
  });

  return (
    <div style={{ padding: '30px', overflowY: 'auto', height: '100%' }}>
      {/* Header Title Row */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div className="text-start">
          <h2 className="fw-extrabold text-white mb-1" style={{ fontSize: '26px' }}>All Cases</h2>
          <p className="text-muted small mb-0">View and manage all verification cases.</p>
        </div>
        
        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <button
            className="export-history-btn"
            id="refreshAllCasesBtn"
            style={{ height: '38px', borderColor: 'var(--winarena-border)', color: '#ffffff' }}
            onClick={() => { setSearchTerm(''); setReasonFilter('all'); }}
          >
            <i className="fa-solid fa-rotate" id="refreshAllCasesIcon"></i> Refresh
          </button>
        </div>
      </div>

      {/* KPI Row (4 cards) */}
      <div className="row g-3 mb-4 text-start">
        {/* KPI 1: TOTAL CASES */}
        <div className="col-md-3">
          <div className="all-cases-kpi-card active-purple d-flex align-items-center gap-3">
            <div className="all-cases-kpi-icon-box" style={{ backgroundColor: 'rgba(118, 51, 239, 0.2)', color: 'var(--winarena-primary-hover)' }}>
              <i className="fa-regular fa-folder-open"></i>
            </div>
            <div>
              <div className="kpi-title" style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>TOTAL CASES</div>
              <div className="kpi-value-large mb-0" style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>248</div>
            </div>
          </div>
        </div>
        {/* KPI 2: PENDING */}
        <div className="col-md-3">
          <div className="all-cases-kpi-card d-flex align-items-center gap-3">
            <div className="all-cases-kpi-icon-box" style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <div>
              <div className="kpi-title" style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>PENDING</div>
              <div className="kpi-value-large mb-0" style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>12</div>
            </div>
          </div>
        </div>
        {/* KPI 3: IN REVIEW */}
        <div className="col-md-3">
          <div className="all-cases-kpi-card d-flex align-items-center gap-3">
            <div className="all-cases-kpi-icon-box" style={{ backgroundColor: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
              <i className="fa-regular fa-clock"></i>
            </div>
            <div>
              <div className="kpi-title" style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>IN REVIEW</div>
              <div className="kpi-value-large mb-0" style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>18</div>
            </div>
          </div>
        </div>
        {/* KPI 4: COMPLETED */}
        <div className="col-md-3">
          <div className="all-cases-kpi-card d-flex align-items-center gap-3">
            <div className="all-cases-kpi-icon-box" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
              <i className="fa-regular fa-circle-check"></i>
            </div>
            <div>
              <div className="kpi-title" style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>COMPLETED</div>
              <div className="kpi-value-large mb-0" style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>218</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 p-3 rounded-4" style={{ backgroundColor: 'var(--winarena-card-bg)', border: '1px solid var(--winarena-border)' }}>
        <div className="d-flex align-items-center gap-3 flex-wrap flex-grow-1">
          {/* Search input */}
          <div className="position-relative flex-grow-1" style={{ maxWidth: '380px' }}>
            <input
              type="text"
              id="allCasesSearchInput"
              placeholder="Search by case ID, account number..."
              className="form-control-custom w-100"
              style={{ paddingLeft: '36px', height: '38px', fontSize: '13px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass position-absolute text-muted" style={{ left: '12px', top: '12px', fontSize: '12px' }}></i>
          </div>

          {/* Reason Dropdown */}
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small fw-bold" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Reason:</span>
            <select
              id="allCasesReasonSelect"
              className="queue-filter-select"
              style={{ minWidth: '170px' }}
              value={reasonFilter}
              onChange={(e) => setReasonFilter(e.target.value)}
            >
              <option value="all">All Reasons</option>
              <option value="fraud_review">Fraud Review</option>
              <option value="proactive_kyc">Proactive KYC</option>
            </select>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3">
          <a
            href="#"
            className="text-decoration-none text-muted small"
            onClick={(e) => { e.preventDefault(); setSearchTerm(''); setReasonFilter('all'); }}
          >
            <i className="fa-solid fa-xmark"></i> Clear all
          </a>
        </div>
      </div>

      {/* All Cases Table Card */}
      <div className="cases-table-card text-start">
        <div className="table-responsive">
          <table className="cases-table" id="allCasesTable">
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Account Number</th>
                <th>Verification Reason</th>
                <th>Status</th>
                <th>Date Received</th>
                <th>Owner</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((c) => (
                <tr key={c.id}>
                  <td style={{ color: 'var(--winarena-primary-hover)', fontWeight: 700 }}>{c.id}</td>
                  <td>{c.account}</td>
                  <td>
                    {c.reason === 'fraud_review' ? (
                      <><i className="fa-solid fa-shield-halved me-1 text-muted"></i> Fraud Review</>
                    ) : (
                      <><i className="fa-regular fa-user me-1 text-muted"></i> Proactive KYC</>
                    )}
                  </td>
                  <td>
                    <span className={`badge-status-dot badge-status-${c.status === 'in_review' ? 'in-review' : c.status}`}>
                      {c.statusLabel}
                    </span>
                  </td>
                  <td className="text-muted" style={{ fontSize: '12px' }}>{c.date}</td>
                  <td className="text-muted small"><i className="fa-regular fa-user me-1"></i> {c.owner}</td>
                  <td>
                    <button
                      type="button"
                      className="btn-table-action border-0 bg-transparent"
                      onClick={() => setSelectedCase(c)}
                    >
                      <i className="fa-regular fa-eye"></i> View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Viewer Modal */}
      {selectedCase && (
        <DocumentViewerModal
          caseData={selectedCase}
          onClose={() => setSelectedCase(null)}
          onDecision={(decision) => {
            alert(`Decision applied to case ${selectedCase.id}: ${decision.toUpperCase()}`);
            setSelectedCase(null);
          }}
        />
      )}
    </div>
  );
}
