import React, { useState } from 'react';

/**
 * QueuePage component.
 * Case management queue view allowing compliance staff to filter, search,
 * prioritize, and audit incoming verification cases.
 *
 * @returns {JSX.Element} The rendered queue dashboard page.
 */
export default function QueuePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [reasonFilter, setReasonFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSubmittingDecision, setIsSubmittingDecision] = useState(false);

  /**
   * Clears search filters and refreshes queue cases.
   */
  const handleRefresh = () => {
    setIsRefreshing(true);
    setSearchTerm('');
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  /**
   * Submits the review verdict for the active queue item.
   */
  const handleSubmitDecision = () => {
    setIsSubmittingDecision(true);
    setTimeout(() => {
      setIsSubmittingDecision(false);
      alert('Verification decision submitted successfully!');
      setSelectedCase(null);
    }, 850);
  };

  const initialQueue = [
    { id: 'DV-1023', account: '78125', name: 'Juan Perez', reason: 'fraud_review', reasonLabel: 'Fraud Review', date: 'May 23, 2026\n10:14 AM', owner: 'Unassigned', icon: 'fa-solid fa-shield-halved' },
    { id: 'DV-1022', account: '66531', name: 'Valentina Gil', reason: 'proactive_kyc', reasonLabel: 'Proactive KYC', date: 'May 24, 2026\n09:28 AM', owner: 'Unassigned', icon: 'fa-regular fa-user' },
    { id: 'DV-1020', account: '43876', name: 'Carlos Mendoza', reason: 'proactive_kyc', reasonLabel: 'Proactive KYC', date: 'May 24, 2026\n02:17 PM', owner: 'Unassigned', icon: 'fa-regular fa-user' },
    { id: 'DV-1019', account: '32544', name: 'Camila Torres', reason: 'proactive_kyc', reasonLabel: 'Proactive KYC', date: 'May 25, 2026\n08:35 AM', owner: 'Unassigned', icon: 'fa-regular fa-user' },
    { id: 'DV-1018', account: '90831', name: 'Felipe Soto', reason: 'fraud_review', reasonLabel: 'Fraud Review', date: 'May 25, 2026\n11:42 AM', owner: 'Paola Castro', icon: 'fa-solid fa-shield-halved' }
  ];

  const filteredQueue = initialQueue.filter((c) => {
    const matchesSearch = c.id.toLowerCase().includes(searchTerm.toLowerCase()) || c.account.includes(searchTerm) || c.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (reasonFilter !== 'all' && c.reason !== reasonFilter) return false;
    return true;
  });

  return (
    <>
      {/* Dashboard Title Row */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div className="text-start">
          <h2 className="fw-extrabold text-white mb-1" style={{ fontSize: '26px' }}>Verification Queue</h2>
          <p className="text-muted small mb-0">Pending verification cases that require review and action.</p>
        </div>
        
        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <button
            className="export-history-btn"
            style={{ height: '38px', borderColor: 'var(--winarena-border)', color: '#ffffff' }}
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <i className={`fa-solid fa-rotate ${isRefreshing ? 'fa-spin me-2' : 'me-1'}`}></i>
            {isRefreshing ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* KPI Row (4 cards) */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="kpi-card-winarena active-glow d-flex align-items-center gap-3">
            <div style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-regular fa-folder-open"></i></div>
            <div>
              <div className="kpi-title">Pending Cases</div>
              <div className="kpi-value-large mb-0">12</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="kpi-card-winarena d-flex align-items-center gap-3">
            <div style={{ fontSize: '24px', color: '#ef4444' }}><i className="fa-solid fa-circle-exclamation"></i></div>
            <div>
              <div className="kpi-title">High Priority</div>
              <div className="kpi-value-large mb-0">4</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="kpi-card-winarena d-flex align-items-center gap-3">
            <div style={{ fontSize: '24px', color: '#00d2ff' }}><i className="fa-regular fa-clock"></i></div>
            <div>
              <div className="kpi-title">Average Waiting Time</div>
              <div className="kpi-value-large mb-0" style={{ fontSize: '20px' }}>2.4 days</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="kpi-card-winarena d-flex align-items-center gap-3">
            <div style={{ fontSize: '24px', color: '#10b981' }}><i className="fa-regular fa-circle-check"></i></div>
            <div>
              <div className="kpi-title">SLA Compliance</div>
              <div className="kpi-value-large mb-0">98.6%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4 p-3 rounded-4" style={{ backgroundColor: 'var(--winarena-card-bg)', border: '1px solid var(--winarena-border)' }}>
        <div className="d-flex align-items-center gap-3 flex-wrap flex-grow-1">
          <div className="position-relative flex-grow-1" style={{ maxWidth: '380px' }}>
            <input
              type="text"
              id="queueSearchInput"
              placeholder="Search by case ID, account number..."
              className="form-control-custom w-100"
              style={{ paddingLeft: '36px', height: '38px', fontSize: '13px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass position-absolute text-muted" style={{ left: '12px', top: '12px', fontSize: '12px' }}></i>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small fw-bold" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Reason:</span>
            <select
              id="queueReasonSelect"
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
          <a href="#" className="text-decoration-none text-muted small" onClick={(e) => { e.preventDefault(); setSearchTerm(''); setReasonFilter('all'); }}>
            <i className="fa-solid fa-xmark"></i> Clear all
          </a>
        </div>
      </div>

      {/* Recent Cases Table Card */}
      <div className="cases-table-card text-start">
        <div className="table-responsive">
          <table className="cases-table" id="queueCasesTable">
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Account Number</th>
                <th>Verification Reason</th>
                <th>Date Received</th>
                <th>Owner</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredQueue.map((item) => (
                <tr key={item.id}>
                  <td style={{ color: 'var(--winarena-primary-hover)', fontWeight: 700 }}>{item.id}</td>
                  <td>{item.account}</td>
                  <td><i className={`${item.icon} me-1 text-muted`}></i> {item.reasonLabel}</td>
                  <td className="text-muted" style={{ fontSize: '12px', whiteSpace: 'pre-line' }}>{item.date}</td>
                  <td className="text-muted small"><i className="fa-regular fa-user"></i> {item.owner}</td>
                  <td>
                    <button className="btn-table-action border-0" onClick={() => setSelectedCase(item)}>
                      <i className="fa-regular fa-eye"></i> View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Modal */}
      {selectedCase && (
        <div id="reviewModal" className="vr-popup-overlay" style={{ display: 'flex', backgroundColor: 'rgba(7, 10, 20, 0.92)', backdropFilter: 'blur(5px)', zIndex: 1100, overflowY: 'auto', padding: '40px 15px' }}>
          <div className="container py-4 my-auto" style={{ maxWidth: '1200px', width: '100%' }}>
            <div className="card-login p-4 position-relative text-start" style={{ backgroundColor: 'var(--winarena-card-bg)', border: '1px solid var(--winarena-border)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.65)' }}>
              
              {/* Close Button */}
              <button
                className="vr-close-btn"
                onClick={() => setSelectedCase(null)}
                style={{ top: '15px', right: '20px', fontSize: '28px', background: 'none', border: 'none', color: 'var(--winarena-text-muted)', cursor: 'pointer' }}
              >
                &times;
              </button>
              
              {/* Modal Header */}
              <div className="mb-4">
                <h3 className="fw-bold text-white mb-1" style={{ fontSize: '22px' }}>Review Verification</h3>
                <p className="text-muted small mb-3">Review and verify the information, documents and details of this case.</p>
                <div className="d-flex align-items-center gap-3 flex-wrap" style={{ fontSize: '12px' }}>
                  <span className="badge px-3 py-1 rounded-pill fw-bold" style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    PENDING
                  </span>
                  <span className="text-muted">• Submitted: {selectedCase.date.replace('\n', ' ')}</span>
                  <span className="text-muted">• {selectedCase.owner === 'Unassigned' ? 'Waiting for assignment' : `Assigned to ${selectedCase.owner}`}</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-bottom border-secondary border-opacity-25 pb-2 mb-4">
                <span className="fw-bold text-white pb-2" style={{ borderBottom: '2px solid var(--winarena-primary)', fontSize: '13px', cursor: 'pointer', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                  Overview
                </span>
              </div>

              <div className="row g-4">
                {/* Left Column (65% width) */}
                <div className="col-lg-8">
                  <div className="row g-3 mb-4">
                    {/* Account Info Card */}
                    <div className="col-md-6">
                      <div className="p-3 rounded-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)', height: '100%' }}>
                        <h6 className="fw-bold text-white mb-3" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover) !important', letterSpacing: '0.5px' }}>
                          <i className="fa-regular fa-user me-2"></i> Account Information
                        </h6>
                        
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Customer Name</span>
                          <span className="fw-bold text-white small" id="reviewPlayerName">{selectedCase.name}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Account Number</span>
                          <span className="fw-bold text-white small" id="reviewAccountNumber">{selectedCase.account}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Country</span>
                          <span className="fw-bold text-white small">United States</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Account Status</span>
                          <span className="badge bg-danger bg-opacity-25 text-danger border border-danger border-opacity-25" style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' }}>Suspended</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Verification Reason</span>
                          <span className="fw-bold text-white small"><i className={`${selectedCase.icon} text-muted me-1`}></i> {selectedCase.reasonLabel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Verification Details Card */}
                    <div className="col-md-6">
                      <div className="p-3 rounded-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)', height: '100%' }}>
                        <h6 className="fw-bold text-white mb-3" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover) !important', letterSpacing: '0.5px' }}>
                          <i className="fa-solid fa-circle-info me-2"></i> Verification Details
                        </h6>
                        
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Verification Type</span>
                          <span className="fw-bold text-white small"><i className={`${selectedCase.icon} text-muted me-1`}></i> {selectedCase.reasonLabel}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Submission Date</span>
                          <span className="fw-bold text-white small">{selectedCase.date.replace('\n', ' ')}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted small">Current Status</span>
                          <span className="badge px-2" style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', backgroundColor: 'rgba(245, 158, 11, 0.08)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)' }}>Pending</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-muted small">Assigned To</span>
                          <span className="text-muted small"><i className="fa-regular fa-user me-1"></i> {selectedCase.owner}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents Card */}
                  <div className="p-3 rounded-4 mb-4" style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
                    <h6 className="fw-bold text-white mb-3" style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--winarena-primary-hover) !important', letterSpacing: '0.5px' }}>
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

                {/* Right Column (35% width) */}
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
                        <input className="form-check-input" type="radio" name="queueDecisionRadio" id="qDecRadio1" defaultChecked />
                        <label className="form-check-label text-white small" htmlFor="qDecRadio1">Approve Verification</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="queueDecisionRadio" id="qDecRadio2" />
                        <label className="form-check-label text-white small" htmlFor="qDecRadio2">Reject Verification (Needs Reupload)</label>
                      </div>
                      <div className="form-check mb-2">
                        <input className="form-check-input" type="radio" name="queueDecisionRadio" id="qDecRadio3" />
                        <label className="form-check-label text-white small" htmlFor="qDecRadio3">Request Additional Documents</label>
                      </div>
                    </div>

                    {/* Fraud Review Condition Card */}
                    <div className="p-3 rounded-4 mb-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                      <div className="fw-bold text-danger mb-3" style={{ fontSize: '12px' }}>
                        <i className="fa-solid fa-triangle-exclamation me-1"></i> Because this case is Fraud Review
                      </div>
                      
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="qFraudActionRadio" id="qFraudRadio1" defaultChecked />
                        <label className="form-check-label text-white small fw-bold" htmlFor="qFraudRadio1">Reactivate Account</label>
                        <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>The account will be reactivated and the user will be able to access the platform.</span>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="qFraudActionRadio" id="qFraudRadio2" />
                        <label className="form-check-label text-white small fw-bold" htmlFor="qFraudRadio2">Permanently Close Account</label>
                        <span className="text-muted d-block" style={{ fontSize: '11px', marginTop: '2px' }}>The account will be permanently closed and the user will no longer have access.</span>
                      </div>
                      <div className="form-check mb-1">
                        <input className="form-check-input" type="radio" name="qFraudActionRadio" id="qFraudRadio3" />
                        <label className="form-check-label text-white small fw-bold" htmlFor="qFraudRadio3">Not Applicable (Requesting Additional Documents)</label>
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
