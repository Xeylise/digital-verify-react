import React, { useState } from 'react';
import DocumentViewerModal from '../../components/organisms/DocumentViewerModal';

/**
 * ReportsPage component.
 * Monthly team productivity report comparing verification throughput between
 * an active evaluation month and a baseline benchmark period.
 *
 * @returns {JSX.Element} The rendered monthly productivity report page.
 */
export default function ReportsPage() {
  const [mesOrigen, setMesOrigen] = useState('2026-09');
  const [mesComp, setMesComp] = useState('2026-08');
  const [meta, setMeta] = useState('');
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const reportCases = [
    { id: 'DV-1034', player: 'Santiago Morales', account: '78125', reason: 'Fraud Review', reasonIcon: 'fa-solid fa-shield-halved', accStatus: 'Active', accClass: 'badge-acc-active', status: 'Completed', statusClass: 'badge-status-completed', priority: 'High', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1033', player: 'Paola Castro', account: '66531', reason: 'Proactive KYC', reasonIcon: 'fa-regular fa-user', accStatus: 'Active', accClass: 'badge-acc-active', status: 'In Review', statusClass: 'badge-status-in-review', priority: 'Medium', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1032', player: 'Carlos Ramirez', account: '43876', reason: 'Fraud Review', reasonIcon: 'fa-solid fa-shield-halved', accStatus: 'Suspended', accClass: 'badge-acc-suspended', status: 'Pending', statusClass: 'badge-status-pending', priority: 'High', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1031', player: 'Mateo Gomez', account: '32544', reason: 'Proactive KYC', reasonIcon: 'fa-regular fa-user', accStatus: 'Active', accClass: 'badge-acc-active', status: 'Completed', statusClass: 'badge-status-completed', priority: 'Low', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1030', player: 'Daniela Ortiz', account: '90831', reason: 'Fraud Review', reasonIcon: 'fa-solid fa-shield-halved', accStatus: 'Closed', accClass: 'badge-acc-closed', status: 'Rejected', statusClass: 'badge-status-rejected', priority: 'High', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1029', player: 'Andres Castro', account: '11903', reason: 'Proactive KYC', reasonIcon: 'fa-regular fa-user', accStatus: 'Active', accClass: 'badge-acc-active', status: 'In Review', statusClass: 'badge-status-in-review', priority: 'Medium', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1028', player: 'Valentina Rios', account: '55721', reason: 'Proactive KYC', reasonIcon: 'fa-regular fa-user', accStatus: 'Active', accClass: 'badge-acc-active', status: 'Completed', statusClass: 'badge-status-completed', priority: 'Low', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1027', player: 'Felipe Mejia', account: '44329', reason: 'Fraud Review', reasonIcon: 'fa-solid fa-shield-halved', accStatus: 'Active', accClass: 'badge-acc-active', status: 'Pending', statusClass: 'badge-status-pending', priority: 'High', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1026', player: 'Camila Pardo', account: '77105', reason: 'Fraud Review', reasonIcon: 'fa-solid fa-shield-halved', accStatus: 'Active', accClass: 'badge-acc-active', status: 'Completed', statusClass: 'badge-status-completed', priority: 'Low', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1025', player: 'Julian Serna', account: '66890', reason: 'Proactive KYC', reasonIcon: 'fa-regular fa-user', accStatus: 'Suspended', accClass: 'badge-acc-suspended', status: 'In Review', statusClass: 'badge-status-in-review', priority: 'Medium', docUrl: '/img/user_avatar.jpg' },
    { id: 'DV-1024', player: 'Mariana Duque', account: '33412', reason: 'Proactive KYC', reasonIcon: 'fa-regular fa-user', accStatus: 'Active', accClass: 'badge-acc-active', status: 'Completed', statusClass: 'badge-status-completed', priority: 'Low', docUrl: '/img/user_avatar.jpg' }
  ];

  /**
   * Generates the monthly comparison report with simulated execution latency.
   */
  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert(`Reporte generado para ${mesOrigen} vs ${mesComp}`);
    }, 700);
  };

  /**
   * Resets date parameters and optional verification targets to default values.
   */
  const handleClear = () => {
    setMesOrigen('2026-09');
    setMesComp('2026-08');
    setMeta('');
  };

  return (
    <div style={{ padding: '30px', overflowY: 'auto', height: '100%' }}>
      {/* Page Title Row */}
      <div className="text-start mb-4">
        <h2 className="fw-extrabold text-white mb-1" style={{ fontSize: '26px' }}>Productividad mensual del equipo</h2>
        <p className="text-muted small mb-0">Reporte mensual para medir la productividad del equipo. Compare el desempeño entre el mes actual y un mes de referencia.</p>
      </div>

      {/* Parameters Filter Card */}
      <div className="reports-filter-card text-start">
        <div className="row g-3 align-items-end">
          {/* Mes de origen */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="reports-field-group">
              <label className="reports-field-label">Mes de origen</label>
              <div className="reports-input-container">
                <i className="fa-regular fa-calendar"></i>
                <select id="reportMesOrigen" value={mesOrigen} onChange={(e) => setMesOrigen(e.target.value)}>
                  <option value="2026-09">Septiembre 2026</option>
                  <option value="2026-08">Agosto 2026</option>
                  <option value="2026-07">Julio 2026</option>
                  <option value="2026-06">Junio 2026</option>
                  <option value="2026-05">Mayo 2026</option>
                  <option value="2026-04">Abril 2026</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mes de comparación */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="reports-field-group">
              <label className="reports-field-label">Mes de comparación</label>
              <div className="reports-input-container">
                <i className="fa-regular fa-calendar"></i>
                <select id="reportMesComp" value={mesComp} onChange={(e) => setMesComp(e.target.value)}>
                  <option value="2026-08">Agosto 2026</option>
                  <option value="2026-07">Julio 2026</option>
                  <option value="2026-06">Junio 2026</option>
                  <option value="2026-05">Mayo 2026</option>
                  <option value="2026-04">Abril 2026</option>
                  <option value="2026-03">Marzo 2026</option>
                </select>
              </div>
            </div>
          </div>

          {/* Meta de verificaciones */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-12">
            <div className="reports-field-group">
              <label className="reports-field-label">Meta de verificaciones (opcional)</label>
              <div className="reports-input-container">
                <i className="fa-solid fa-bullseye"></i>
                <input
                  type="text"
                  id="reportMeta"
                  placeholder="Ej. 600"
                  value={meta}
                  onChange={(e) => setMeta(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-12 d-flex gap-2 flex-wrap flex-sm-nowrap">
            <button
              type="button"
              className="btn-generate-report flex-grow-1"
              id="btnGenerarReporte"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin me-2"></i> Generando...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-magnifying-glass"></i> Generar reporte
                </>
              )}
            </button>
            <button type="button" className="btn-clear-report flex-shrink-0" id="btnLimpiarReporte" onClick={handleClear}>
              <i className="fa-solid fa-rotate-left"></i> Limpiar
            </button>
          </div>
        </div>

        {/* Info note */}
        <div className="d-flex align-items-center gap-2 mt-3 pt-2 text-muted" style={{ fontSize: '11.5px' }}>
          <i className="fa-solid fa-circle-info" style={{ color: 'var(--winarena-primary)' }}></i>
          <span>En los listados solo se muestran los últimos 6 meses a partir del mes actual.</span>
        </div>
      </div>

      {/* Report Results Card */}
      <div className="cases-table-card text-start">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <h4 className="fw-bold text-white mb-1" style={{ fontSize: '18px' }}>Resultados del reporte</h4>
            <span className="text-muted small" id="reportSubtitleText">Productividad del equipo - Septiembre 2026 vs Agosto 2026</span>
          </div>

          {/* Export Dropdown */}
          <div className="position-relative" id="reportsExportContainer">
            <button type="button" className="reports-export-btn" onClick={() => setExportMenuOpen(prev => !prev)}>
              <i className="fa-solid fa-download"></i> Exportar <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '10px' }}></i>
            </button>
            {exportMenuOpen && (
              <div className="reports-export-menu" id="reportsExportMenu" style={{ display: 'block' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Descargando reporte en formato Excel (.xlsx)...'); setExportMenuOpen(false); }}>
                  <i className="fa-regular fa-file-excel text-success"></i> Formato Excel (.xlsx)
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Descargando reporte en formato CSV (.csv)...'); setExportMenuOpen(false); }}>
                  <i className="fa-solid fa-file-csv text-info"></i> Formato CSV (.csv)
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Results Table */}
        <div className="table-responsive">
          <table className="cases-table" id="reportsCasesTable">
            <thead>
              <tr>
                <th>CASE ID</th>
                <th>ACCOUNT NUMBER</th>
                <th>VERIFICATION REASON</th>
                <th>ACCOUNT STATUS</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {reportCases.map((rc) => (
                <tr key={rc.id}>
                  <td
                    style={{ color: 'var(--winarena-primary-hover)', fontWeight: 700, cursor: 'pointer' }}
                    onClick={() => setSelectedCase(rc)}
                  >
                    {rc.id}
                  </td>
                  <td>{rc.account}</td>
                  <td><i className={`${rc.reasonIcon} me-2 text-muted`}></i> {rc.reason}</td>
                  <td><span className={`badge-acc-status ${rc.accClass}`}>{rc.accStatus}</span></td>
                  <td><span className={`badge-status-dot ${rc.statusClass}`}>{rc.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Modal */}
      {selectedCase && (
        <DocumentViewerModal
          caseData={selectedCase}
          onClose={() => setSelectedCase(null)}
          onDecision={(decision) => {
            alert(`Acción ${decision.toUpperCase()} aplicada al expediente ${selectedCase.id}`);
            setSelectedCase(null);
          }}
        />
      )}
    </div>
  );
}
