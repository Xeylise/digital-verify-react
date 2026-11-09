import React from 'react';

/**
 * VerificationList component.
 * Tabular view displaying pending, in review, and processed KYC requests in the backoffice queue.
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} [props.cases=[]] - List of verification case entities.
 * @param {Function} [props.onSelectCase] - Callback triggered when selecting a case for audit.
 * @param {string|null} [props.selectedCaseId=null] - Active case identifier.
 * @param {string} [props.emptyMessage] - Text shown when no records match filter criteria.
 * @returns {JSX.Element} The rendered table element.
 */
export default function VerificationList({
  cases = [],
  onSelectCase,
  selectedCaseId = null,
  emptyMessage = 'No cases found matching your filters.',
}) {
  return (
    <div className="table-responsive">
      <table className="table backoffice-table align-middle mb-0">
        <thead>
          <tr>
            <th>CASE ID</th>
            <th>ACCOUNT</th>
            <th>TRIGGER / REASON</th>
            <th>DATE CREATED</th>
            <th>ASSIGNED TO</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cases.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4 text-muted">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            cases.map((caseItem) => {
              const isSelected = selectedCaseId === caseItem.id;
              return (
                <tr
                  key={caseItem.id}
                  className={`cursor-pointer ${isSelected ? 'table-active' : ''}`}
                  onClick={() => onSelectCase && onSelectCase(caseItem)}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="fw-bold" style={{ color: 'var(--winarena-primary-hover)' }}>
                    {caseItem.id}
                  </td>
                  <td>
                    <span className="text-white fw-bold">{caseItem.name || `User #${caseItem.account}`}</span>
                    <span className="text-muted d-block" style={{ fontSize: '11px' }}>ID: {caseItem.account}</span>
                  </td>
                  <td>
                    <span className="d-flex align-items-center gap-2">
                      <i className={`${caseItem.reasonIcon || caseItem.icon || 'fa-solid fa-shield-halved'} text-muted`}></i>
                      <span className="text-white">{caseItem.reasonLabel || caseItem.reason}</span>
                    </span>
                  </td>
                  <td className="text-muted small">
                    {caseItem.date}
                  </td>
                  <td>
                    <span className="badge rounded-pill" style={{ backgroundColor: '#131a29', color: '#a0aec0', fontSize: '11px', border: '1px solid var(--winarena-border)' }}>
                      <i className="fa-regular fa-user me-1"></i> {caseItem.owner || 'Unassigned'}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${caseItem.statusClass || (caseItem.status === 'in_review' ? 'badge-outline-review' : 'badge-outline-pending')}`}>
                      {caseItem.statusLabel || caseItem.status}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm text-white px-3 py-1 rounded-pill fw-bold"
                      style={{ backgroundColor: 'var(--winarena-primary)', fontSize: '11px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectCase) onSelectCase(caseItem);
                      }}
                    >
                      Audit
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
