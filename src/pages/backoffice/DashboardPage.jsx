import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * DashboardPage component.
 * Central internal control desk providing real-time KPI overview, case volume charts,
 * filterable queues, and interactive 1200px case review modals.
 *
 * @returns {JSX.Element} The rendered internal audit dashboard.
 */
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [dateRangeText, setDateRangeText] = useState('May 20, 2026 - May 26, 2026');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSubmittingDecision, setIsSubmittingDecision] = useState(false);

  /**
   * Refreshes the dashboard KPI metrics and case records.
   */
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  /**
   * Submits the compliance officer's verdict and closes the audit modal.
   */
  const handleSubmitDecision = () => {
    setIsSubmittingDecision(true);
    setTimeout(() => {
      setIsSubmittingDecision(false);
      alert('Verification decision submitted successfully!');
      setSelectedCase(null);
    }, 850);
  };

  const casesData = [
    {
      id: "DV-1023",
      account: "80948",
      reason: "fraud_review",
      reasonLabel: "Fraud Review",
      reasonIcon: "fa-solid fa-shield-halved",
      date: "May 23, 2026 10:14 AM",
      owner: "Unassigned",
      status: "pending",
      statusLabel: "Pending",
      statusClass: "badge-outline-pending",
      country: "United States",
      accountStatus: "Suspended"
    },
    {
      id: "DV-1022",
      account: "78125",
      reason: "proactive_kyc",
      reasonLabel: "Proactive KYC",
      reasonIcon: "fa-regular fa-user",
      date: "May 24, 2026 09:28 AM",
      owner: "Unassigned",
      status: "pending",
      statusLabel: "Pending",
      statusClass: "badge-outline-pending",
      country: "Colombia",
      accountStatus: "Active"
    },
    {
      id: "DV-1020",
      account: "43876",
      reason: "proactive_kyc",
      reasonLabel: "Proactive KYC",
      reasonIcon: "fa-regular fa-user",
      date: "May 24, 2026 02:17 PM",
      owner: "Unassigned",
      status: "in_review",
      statusLabel: "In Review",
      statusClass: "badge-outline-review",
      country: "Sweden",
      accountStatus: "Active"
    },
    {
      id: "DV-1019",
      account: "32544",
      reason: "proactive_kyc",
      reasonLabel: "Proactive KYC",
      reasonIcon: "fa-regular fa-user",
      date: "May 25, 2026 08:35 AM",
      owner: "Paola Castro",
      status: "in_review",
      statusLabel: "In Review",
      statusClass: "badge-outline-review",
      country: "Canada",
      accountStatus: "Active"
    },
    {
      id: "DV-1018",
      account: "90831",
      reason: "fraud_review",
      reasonLabel: "Fraud Review",
      reasonIcon: "fa-solid fa-shield-halved",
      date: "May 25, 2026 11:42 AM",
      owner: "Unassigned",
      status: "pending",
      statusLabel: "Pending",
      statusClass: "badge-outline-pending",
      country: "Mexico",
      accountStatus: "Suspended"
    }
  ];

  const filteredCases = casesData.filter((c) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return c.status === 'pending';
    if (activeTab === 'in_review') return c.status === 'in_review';
    if (activeTab === 'fraud_review') return c.reason === 'fraud_review';
    if (activeTab === 'proactive_kyc') return c.reason === 'proactive_kyc';
    if (activeTab === 'assigned_to_me') return c.owner === 'Paola Castro';
    return true;
  });

  return (
    <>
      {/* Dashboard Title Row */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3 pt-1">
        <div className="text-start">
          <h2 className="fw-extrabold text-white mb-1" style={{ fontSize: '26px' }}>Verification Dashboard</h2>
          <p className="text-muted small mb-0">Real-time overview of verification operations and system performance.</p>
        </div>
        
        {/* Actions & Date selector */}
        <div className="d-flex align-items-center gap-2">
          <button
            className="export-history-btn"
            style={{ height: '38px', borderColor: 'var(--winarena-border)', color: '#ffffff' }}
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <i className={`fa-solid fa-rotate ${isRefreshing ? 'fa-spin me-2' : 'me-1'}`}></i>
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>

          <div className="position-relative" id="dateRangeDropdownContainer">
            <button className="bet-filter-select" id="dateRangeBtn" onClick={() => setDateDropdownOpen(!dateDropdownOpen)}>
              <span><i className="fa-regular fa-calendar me-2 text-muted"></i> <span>{dateRangeText}</span></span>
              <i className="fa-solid fa-chevron-down ms-3" style={{ fontSize: '10px', color: 'var(--winarena-text-muted)' }}></i>
            </button>

          {dateDropdownOpen && (
            <div id="dateRangeDropdown" className="date-dropdown-menu" style={{ display: 'block' }}>
              <div className="px-3 py-2 border-bottom border-secondary border-opacity-25 mb-1 d-flex justify-content-between align-items-center">
                <span className="text-white fw-bold small" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Filter by Period</span>
                <span className="badge" style={{ backgroundColor: 'rgba(118, 51, 239, 0.2)', color: 'var(--winarena-primary-hover)', fontSize: '10px' }}>2026</span>
              </div>
              <a href="#" className="date-dropdown-item" onClick={(e) => { e.preventDefault(); setDateRangeText('May 26, 2026'); setDateDropdownOpen(false); }}>
                <i className="fa-regular fa-clock"></i> Today
              </a>
              <a href="#" className="date-dropdown-item active" onClick={(e) => { e.preventDefault(); setDateRangeText('May 20, 2026 - May 26, 2026'); setDateDropdownOpen(false); }}>
                <i className="fa-regular fa-calendar-days"></i> Last 7 Days
              </a>
              <a href="#" className="date-dropdown-item" onClick={(e) => { e.preventDefault(); setDateRangeText('Apr 26, 2026 - May 26, 2026'); setDateDropdownOpen(false); }}>
                <i className="fa-regular fa-calendar"></i> Last 30 Days
              </a>
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Tabs filters */}
      <div className="d-flex gap-2 mb-4 flex-wrap pb-2 border-bottom border-secondary border-opacity-25" id="dashboardTabs">
        {[
          { id: 'all', label: 'All' },
          { id: 'pending', label: 'Pending' },
          { id: 'in_review', label: 'In Review' },
          { id: 'fraud_review', label: 'Fraud Review' },
          { id: 'proactive_kyc', label: 'Proactive KYC' },
          { id: 'assigned_to_me', label: 'Assigned to Me' }
        ].map((tab) => (
          <button
            key={tab.id}
            className={`tab-filter-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Numeric KPI Row (7 KPI boxes) */}
      <div className="kpi-row-container">
        <div className="kpi-card-winarena">
          <div className="kpi-title">Pending Cases</div>
          <div className="kpi-value-large">12</div>
          <div className="kpi-trend-up"><i className="fa-solid fa-arrow-up"></i> 3 <span className="text-muted" style={{ fontSize: '10px' }}>vs last 7 days</span></div>
        </div>
        <div className="kpi-card-winarena">
          <div className="kpi-title">In Review</div>
          <div className="kpi-value-large">6</div>
          <div className="kpi-trend-down"><i className="fa-solid fa-arrow-down"></i> 2 <span className="text-muted" style={{ fontSize: '10px' }}>vs last 7 days</span></div>
        </div>
        <div className="kpi-card-winarena">
          <div className="kpi-title">Completed Cases</div>
          <div className="kpi-value-large">38</div>
          <div className="kpi-trend-up"><i className="fa-solid fa-arrow-up"></i> 7 <span className="text-muted" style={{ fontSize: '10px' }}>vs last 7 days</span></div>
        </div>
        <div className="kpi-card-winarena">
          <div className="kpi-title">Rejected</div>
          <div className="kpi-value-large">3</div>
          <div className="kpi-trend-down"><i className="fa-solid fa-arrow-down"></i> 1 <span className="text-muted" style={{ fontSize: '10px' }}>vs last 7 days</span></div>
        </div>
        <div className="kpi-card-winarena">
          <div className="kpi-title">Suspended Accounts</div>
          <div className="kpi-value-large">7</div>
          <div className="kpi-trend-down"><i className="fa-solid fa-arrow-down"></i> 2 <span className="text-muted" style={{ fontSize: '10px' }}>vs last 7 days</span></div>
        </div>
        <div className="kpi-card-winarena">
          <div className="kpi-title">Average Review Time</div>
          <div className="kpi-value-large" style={{ fontSize: '20px' }}>4 min</div>
          <div className="kpi-trend-up"><i className="fa-solid fa-arrow-up"></i> 1.2 min <span className="text-muted" style={{ fontSize: '10px' }}>vs last 7 days</span></div>
        </div>
        <div className="kpi-card-winarena">
          <div className="kpi-title">Assigned to Me</div>
          <div className="kpi-value-large">5</div>
          <div className="text-muted" style={{ fontSize: '11px', fontWeight: 600 }}>Active Queue</div>
        </div>
      </div>

      {/* Quick Action Cards Grid (3 boxes) */}
      <div className="quick-action-grid">
        <div className="action-card-winarena text-start">
          <div className="action-card-icon-box"><i className="fa-solid fa-list-check"></i></div>
          <h5 className="fw-bold text-white mb-2" style={{ fontSize: '15px' }}>Go to Verification Queue</h5>
          <p className="text-muted small mb-4" style={{ minHeight: '40px' }}>View and manage pending verification cases in the queue.</p>
          <Link to="/queue" className="btn-action-go text-decoration-none d-block">Open Queue <i className="fa-solid fa-arrow-right ms-1"></i></Link>
        </div>
        <div className="action-card-winarena text-start">
          <div className="action-card-icon-box"><i className="fa-solid fa-magnifying-glass"></i></div>
          <h5 className="fw-bold text-white mb-2" style={{ fontSize: '15px' }}>Search Cases</h5>
          <p className="text-muted small mb-4" style={{ minHeight: '40px' }}>Find cases by case ID, account number, status or verification reason.</p>
          <Link to="/all-cases" className="btn-action-go text-decoration-none d-block">Search Cases <i className="fa-solid fa-arrow-right ms-1"></i></Link>
        </div>
        <div className="action-card-winarena text-start">
          <div className="action-card-icon-box"><i className="fa-solid fa-chart-simple"></i></div>
          <h5 className="fw-bold text-white mb-2" style={{ fontSize: '15px' }}>Verification Reports</h5>
          <p className="text-muted small mb-4" style={{ minHeight: '40px' }}>Access performance reports and export verification data.</p>
          <Link to="/reports" className="btn-action-go text-decoration-none d-block">View Reports <i className="fa-solid fa-arrow-right ms-1"></i></Link>
        </div>
      </div>

      {/* Recent Cases Table Card */}
      <div className="cases-table-card text-start">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold text-white mb-0" style={{ fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recent Cases</h4>
          <Link to="/all-cases" className="text-decoration-none text-muted small fw-bold" style={{ color: 'var(--winarena-primary-hover)' }}>
            View all cases <i className="fa-solid fa-arrow-right ms-1"></i>
          </Link>
        </div>

        <div className="table-responsive">
          <table className="cases-table" id="recentCasesTable">
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Account Number</th>
                <th>Verification Reason</th>
                <th>Date Received</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((c) => (
                <tr key={c.id}>
                  <td style={{ color: 'var(--winarena-primary-hover)', fontWeight: 700 }}>{c.id}</td>
                  <td>{c.account}</td>
                  <td><i className={`${c.reasonIcon} me-1 text-muted`}></i> {c.reasonLabel}</td>
                  <td className="text-muted" style={{ fontSize: '12px' }}>{c.date}</td>
                  <td className="text-muted small"><i className="fa-regular fa-user"></i> {c.owner}</td>
                  <td><span className={`badge-outline-custom ${c.statusClass}`}>{c.statusLabel}</span></td>
                  <td>
                    <button className="btn-table-action border-0" onClick={() => setSelectedCase(c)}>
                      <i className="fa-regular fa-eye"></i> View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Case Modal Overlay */}
      {selectedCase && (
        <div className="vr-popup-overlay" style={{ display: 'flex' }} onClick={() => setSelectedCase(null)}>
          <div className="login-container animated-login-card" style={{ maxWidth: '1050px', width: '95%' }} onClick={(e) => e.stopPropagation()}>
            <div className="card-login position-relative p-4" style={{ backgroundColor: 'var(--winarena-card-bg)', border: '1px solid var(--winarena-border)', borderRadius: '16px' }}>
              <button className="vr-close-btn" onClick={() => setSelectedCase(null)}>&times;</button>
              
              <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary border-opacity-25 pb-3">
                <div className="text-start">
                  <div className="d-flex align-items-center gap-2">
                    <h4 className="fw-bold text-white mb-0" style={{ fontSize: '20px' }}>Case {selectedCase.id}</h4>
                    <span className="badge ms-2" style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', fontSize: '11px', textTransform: 'uppercase' }}>
                      {selectedCase.reasonLabel}
                    </span>
                  </div>
                  <span className="text-muted small">Submitted on {selectedCase.date}</span>
                </div>
              </div>

              <div className="row g-4 text-start">
                <div className="col-lg-8">
                  {/* Info Cards Row */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="p-3 rounded-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
                        <h6 className="fw-bold text-white mb-3" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)', letterSpacing: '0.5px' }}>
                          <i className="fa-regular fa-user me-2"></i> Applicant Info
                        </h6>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Account Number</span>
                          <span className="fw-bold text-white small">{selectedCase.account}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Country</span>
                          <span className="fw-bold text-white small">{selectedCase.country}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted small">Account Status</span>
                          <span className="badge bg-danger bg-opacity-25 text-danger border border-danger border-opacity-25" style={{ fontSize: '10px' }}>
                            {selectedCase.accountStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
                        <h6 className="fw-bold text-white mb-3" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)', letterSpacing: '0.5px' }}>
                          <i className="fa-solid fa-circle-info me-2"></i> Verification Details
                        </h6>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Type</span>
                          <span className="fw-bold text-white small">{selectedCase.reasonLabel}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Status</span>
                          <span className={`badge-outline-custom ${selectedCase.statusClass}`}>{selectedCase.statusLabel}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted small">Assigned To</span>
                          <span className="text-muted small">{selectedCase.owner}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents table */}
                  <div className="p-3 rounded-4 mb-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
                    <h6 className="fw-bold text-white mb-3" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)', letterSpacing: '0.5px' }}>
                      <i className="fa-regular fa-file-lines me-2"></i> Documents
                    </h6>
                    <div className="table-responsive">
                      <table className="w-100" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                          <tr className="border-bottom border-secondary border-opacity-25">
                            <th className="text-muted small pb-2" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Document Type</th>
                            <th className="text-muted small pb-2" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Status</th>
                            <th className="text-muted small pb-2 text-center" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Preview</th>
                            <th className="text-muted small pb-2 text-end" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-bottom border-secondary border-opacity-10">
                            <td className="py-3">
                              <div className="fw-bold text-white small">Identity Document</div>
                              <div className="text-muted" style={{ fontSize: '11px' }}>ID Card (Front)</div>
                            </td>
                            <td><span className="badge bg-warning text-dark px-2" style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}>Pending Review</span></td>
                            <td style={{ textAlign: 'center' }}><i className="fa-regular fa-eye text-muted cursor-pointer" style={{ fontSize: '14px' }} onClick={() => alert('Opening image preview for ID Card Front...')}></i></td>
                            <td style={{ textAlign: 'right' }}><button className="btn-table-action" style={{ fontSize: '11px', padding: '4px 10px' }} onClick={() => alert('Downloading Document...')}>Open Document</button></td>
                          </tr>
                          <tr className="border-bottom border-secondary border-opacity-10">
                            <td className="py-3">
                              <div className="fw-bold text-white small">Identity Document</div>
                              <div className="text-muted" style={{ fontSize: '11px' }}>ID Card (Back)</div>
                            </td>
                            <td><span className="badge bg-warning text-dark px-2" style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}>Pending Review</span></td>
                            <td style={{ textAlign: 'center' }}><i className="fa-regular fa-eye text-muted cursor-pointer" style={{ fontSize: '14px' }} onClick={() => alert('Opening image preview for ID Card Back...')}></i></td>
                            <td style={{ textAlign: 'right' }}><button className="btn-table-action" style={{ fontSize: '11px', padding: '4px 10px' }} onClick={() => alert('Downloading Document...')}>Open Document</button></td>
                          </tr>
                          <tr>
                            <td className="py-3">
                              <div className="fw-bold text-white small">Proof of Address</div>
                              <div className="text-muted" style={{ fontSize: '11px' }}>Proof of Address</div>
                            </td>
                            <td><span className="badge bg-warning text-dark px-2" style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}>Pending Review</span></td>
                            <td style={{ textAlign: 'center' }}><i className="fa-regular fa-eye text-muted cursor-pointer" style={{ fontSize: '14px' }} onClick={() => alert('Opening image preview for Proof of Address...')}></i></td>
                            <td style={{ textAlign: 'right' }}><button className="btn-table-action" style={{ fontSize: '11px', padding: '4px 10px' }} onClick={() => alert('Downloading Document...')}>Open Document</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div className="p-3 rounded-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
                    <h6 className="fw-bold text-white mb-4" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover) !important', letterSpacing: '0.5px' }}>
                      <i className="fa-regular fa-clock me-2"></i> Timeline
                    </h6>
                    
                    <div className="position-relative d-flex justify-content-between align-items-center px-5 mb-4" style={{ marginTop: '20px' }}>
                      <div style={{ position: 'absolute', top: '16px', left: '60px', right: '60px', height: '2px', backgroundColor: 'var(--winarena-border)', zIndex: 1 }}></div>
                      
                      <div className="text-center" style={{ position: 'relative', zIndex: 2, width: '90px' }}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '32px', height: '32px', border: '2px solid var(--winarena-primary)', backgroundColor: 'var(--winarena-primary)', color: '#ffffff' }}>
                          <i className="fa-solid fa-arrow-up-from-bracket" style={{ fontSize: '12px' }}></i>
                        </div>
                        <div className="fw-bold text-white small" style={{ fontSize: '11px' }}>Submitted</div>
                        <div className="text-muted" style={{ fontSize: '9px', lineHeight: 1.2 }}>May 23, 2026<br />10:14 AM</div>
                      </div>
                      
                      <div className="text-center text-muted" style={{ position: 'relative', zIndex: 2, width: '90px' }}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '32px', height: '32px', border: '2px solid var(--winarena-border)', backgroundColor: '#070a14', color: 'var(--winarena-text-muted)' }}>
                          <i className="fa-regular fa-user" style={{ fontSize: '12px' }}></i>
                        </div>
                        <div className="fw-bold small" style={{ fontSize: '11px' }}>Assigned</div>
                        <div className="text-muted" style={{ fontSize: '9px', lineHeight: 1.2 }}>Not assigned</div>
                      </div>

                      <div className="text-center text-muted" style={{ position: 'relative', zIndex: 2, width: '90px' }}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '32px', height: '32px', border: '2px solid var(--winarena-border)', backgroundColor: '#070a14', color: 'var(--winarena-text-muted)' }}>
                          <i className="fa-regular fa-circle-check" style={{ fontSize: '12px' }}></i>
                        </div>
                        <div className="fw-bold small" style={{ fontSize: '11px' }}>Reviewed</div>
                        <div className="text-muted" style={{ fontSize: '9px', lineHeight: 1.2 }}>Pending</div>
                      </div>

                      <div className="text-center text-muted" style={{ position: 'relative', zIndex: 2, width: '90px' }}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '32px', height: '32px', border: '2px solid var(--winarena-border)', backgroundColor: '#070a14', color: 'var(--winarena-text-muted)' }}>
                          <i className="fa-solid fa-lock" style={{ fontSize: '12px' }}></i>
                        </div>
                        <div className="fw-bold small" style={{ fontSize: '11px' }}>Decision</div>
                        <div className="text-muted" style={{ fontSize: '9px', lineHeight: 1.2 }}>Pending</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="btn-timeline-assign" onClick={() => alert('Case assigned successfully to Paola Castro!')}>
                        <i className="fa-solid fa-user-plus"></i> Assign Case
                      </button>
                      <div className="text-muted small mt-2" style={{ fontSize: '11px' }}>Assign this case to start the review process.</div>
                    </div>
                  </div>
                </div>

                {/* Right Decision Column */}
                <div className="col-lg-4">
                  <div className="p-3 rounded-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)', height: '100%' }}>
                    <h6 className="fw-bold text-white mb-2" style={{ fontSize: '14px' }}>
                      <i className="fa-solid fa-bolt me-2" style={{ color: 'var(--winarena-primary-hover)' }}></i> Decision Panel
                    </h6>
                    <span className="text-muted small d-block mb-4" style={{ fontSize: '12px' }}>Choose the appropriate action for this verification.</span>
                    
                    {/* Decision options */}
                    <div className="mb-4">
                      <div className="fw-bold text-white mb-3" style={{ fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)' }}>Verification Decision</div>
                      
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="decisionRadio" id="decRadio1" defaultChecked />
                        <label className="form-check-label text-white small" htmlFor="decRadio1">Approve Verification</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="decisionRadio" id="decRadio2" />
                        <label className="form-check-label text-white small" htmlFor="decRadio2">Reject Verification (Needs Reupload)</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="decisionRadio" id="decRadio3" />
                        <label className="form-check-label text-white small" htmlFor="decRadio3">Request Additional Documents</label>
                      </div>
                    </div>

                    {/* Fraud Review Condition Card */}
                    <div className="p-3 rounded-4 mb-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <div className="fw-bold text-danger mb-3" style={{ fontSize: '12px' }}>
                        <i className="fa-solid fa-triangle-exclamation me-1"></i> Because this case is Fraud Review
                      </div>
                      
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="fraudActionRadio" id="fraudRadio1" defaultChecked />
                        <label className="form-check-label text-white small fw-bold" htmlFor="fraudRadio1">Reactivate Account</label>
                        <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>The account will be reactivated and the user will be able to access the platform.</span>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="fraudActionRadio" id="fraudRadio2" />
                        <label className="form-check-label text-white small fw-bold" htmlFor="fraudRadio2">Permanently Close Account</label>
                        <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>The account will be permanently closed and the user will no longer have access.</span>
                      </div>
                      <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="fraudActionRadio" id="fraudRadio3" />
                        <label className="form-check-label text-white small fw-bold" htmlFor="fraudRadio3">Not Applicable (Requesting Additional Documents)</label>
                        <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>Select this option if you are requesting more information or documents.</span>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="mb-4 text-start">
                      <label className="form-label fw-bold text-white mb-2" style={{ fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover)' }}>
                        Comments <span className="text-muted" style={{ fontWeight: 500, textTransform: 'none' }}>(required)</span>
                      </label>
                      <textarea className="form-control-custom w-100" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)', color: '#ffffff', padding: '12px', borderRadius: '8px', fontSize: '13px', height: '100px', resize: 'none' }} placeholder="Add comments about your decision..."></textarea>
                      <span className="text-muted d-block mt-2" style={{ fontSize: '11px' }}>0 / 1000 characters</span>
                    </div>

                    {/* Submit Decision Button */}
                    <button
                      className="btn text-white w-100 py-3 rounded-pill fw-bold text-uppercase"
                      style={{ backgroundColor: 'var(--winarena-primary)', border: 'none', fontSize: '12px', letterSpacing: '0.8px', boxShadow: '0 4px 15px rgba(118, 51, 239, 0.3)' }}
                      onClick={handleSubmitDecision}
                      disabled={isSubmittingDecision}
                    >
                      {isSubmittingDecision ? (
                        <>
                          <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Submitting Decision...
                        </>
                      ) : (
                        <>
                          <i className="fa-regular fa-circle-check me-1"></i> Submit Decision
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
