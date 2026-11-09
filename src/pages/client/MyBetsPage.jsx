import React, { useState } from 'react';

export default function MyBetsPage() {
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [statusFilter, setStatusFilter] = useState('All');
  const [gameFilter, setGameFilter] = useState('All Games');

  return (
    <div className="container-fluid p-0" style={{ maxWidth: '1050px', margin: '0 auto' }}>
      {/* Title Section */}
      <div className="d-flex align-items-center gap-3 mb-2">
        <span style={{ fontSize: '24px', color: 'var(--winarena-primary)' }}><i className="fa-solid fa-ticket"></i></span>
        <h3 className="fw-bold text-white mb-0">Bet History</h3>
      </div>
      <p className="text-muted small mb-4">View your past bets and their results.</p>

      {/* Filters & Export Bar */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Date Range</span>
            <select
              className="bet-filter-select"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Status</span>
            <select
              className="bet-filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Won</option>
              <option>Lost</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted small" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Game</span>
            <select
              className="bet-filter-select"
              value={gameFilter}
              onChange={(e) => setGameFilter(e.target.value)}
            >
              <option>All Games</option>
              <option>CS2</option>
              <option>Dota 2</option>
              <option>LoL</option>
            </select>
          </div>
        </div>
        <button className="export-history-btn" onClick={() => alert('Export function under development.')}>
          <i className="fa-solid fa-download"></i> EXPORT HISTORY
        </button>
      </div>

      {/* Bets Table Container */}
      <div className="bet-table-container">
        <table className="bet-history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Selection</th>
              <th>Odds</th>
              <th>Stake</th>
              <th>Payout</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <div className="fw-bold text-white">May 20, 2026</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>10:45 PM</div>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted"><i className="fa-solid fa-gamepad"></i></span>
                  <div>
                    <div className="fw-bold text-white">G2 Esports vs FaZe Clan</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>CS2 – IEM Dallas 2026</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="fw-bold text-white">G2 Esports</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Match Winner</div>
              </td>
              <td className="fw-bold text-white">1.65</td>
              <td className="fw-bold text-white">$25.00</td>
              <td>
                <span className="fw-bold" style={{ color: '#10b981' }}>$41.25</span>
                <span className="ms-1" style={{ color: '#10b981', fontSize: '11px' }}><i className="fa-solid fa-coins"></i></span>
              </td>
              <td>
                <span className="bet-status-won"><span className="dot-green"></span> WON</span>
              </td>
              <td className="text-muted"><i className="fa-solid fa-chevron-right"></i></td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <div className="fw-bold text-white">May 20, 2026</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>08:15 PM</div>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted"><i className="fa-solid fa-gamepad"></i></span>
                  <div>
                    <div className="fw-bold text-white">Team Spirit vs BetBoom Team</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>Dota 2 – DreamLeague S23</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="fw-bold text-white">Team Spirit</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Match Winner</div>
              </td>
              <td className="fw-bold text-white">1.80</td>
              <td className="fw-bold text-white">$30.00</td>
              <td>
                <span className="fw-bold" style={{ color: '#10b981' }}>$54.00</span>
                <span className="ms-1" style={{ color: '#10b981', fontSize: '11px' }}><i className="fa-solid fa-coins"></i></span>
              </td>
              <td>
                <span className="bet-status-won"><span className="dot-green"></span> WON</span>
              </td>
              <td className="text-muted"><i className="fa-solid fa-chevron-right"></i></td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <div className="fw-bold text-white">May 19, 2026</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>11:30 PM</div>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted"><i className="fa-solid fa-gamepad"></i></span>
                  <div>
                    <div className="fw-bold text-white">T1 vs Gen.G</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>LoL – LCK Spring 2026</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="fw-bold text-white">T1</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Match Winner</div>
              </td>
              <td className="fw-bold text-white">1.72</td>
              <td className="fw-bold text-white">$20.00</td>
              <td className="text-muted">$0.00</td>
              <td>
                <span className="bet-status-lost"><span className="dot-red"></span> LOST</span>
              </td>
              <td className="text-muted"><i className="fa-solid fa-chevron-right"></i></td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td>
                <div className="fw-bold text-white">May 19, 2026</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>07:50 PM</div>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted"><i className="fa-solid fa-gamepad"></i></span>
                  <div>
                    <div className="fw-bold text-white">100 Thieves vs NRG</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>VALORANT – VCT Americas</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="fw-bold text-white">Over 2.5 Maps</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Total Maps</div>
              </td>
              <td className="fw-bold text-white">1.90</td>
              <td className="fw-bold text-white">$15.00</td>
              <td>
                <span className="fw-bold" style={{ color: '#10b981' }}>$28.50</span>
                <span className="ms-1" style={{ color: '#10b981', fontSize: '11px' }}><i className="fa-solid fa-coins"></i></span>
              </td>
              <td>
                <span className="bet-status-won"><span className="dot-green"></span> WON</span>
              </td>
              <td className="text-muted"><i className="fa-solid fa-chevron-right"></i></td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td>
                <div className="fw-bold text-white">May 18, 2026</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>09:10 PM</div>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <span className="text-muted"><i className="fa-solid fa-gamepad"></i></span>
                  <div>
                    <div className="fw-bold text-white">Vitality vs Natus Vincere</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>CS2 – BLAST Premier</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="fw-bold text-white">Vitality</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>Match Winner</div>
              </td>
              <td className="fw-bold text-white">1.55</td>
              <td className="fw-bold text-white">$40.00</td>
              <td className="text-muted">$0.00</td>
              <td>
                <span className="bet-status-lost"><span className="dot-red"></span> LOST</span>
              </td>
              <td className="text-muted"><i className="fa-solid fa-chevron-right"></i></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table Footer Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
        <div className="d-flex align-items-center gap-2">
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-chevron-left"></i></a>
          <a href="#" className="bet-page-item active" onClick={(e) => e.preventDefault()}>1</a>
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}>2</a>
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}>3</a>
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}>4</a>
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}>5</a>
          <span className="text-muted mx-1">...</span>
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}>10</a>
          <a href="#" className="bet-page-item" onClick={(e) => e.preventDefault()}><i className="fa-solid fa-chevron-right"></i></a>
        </div>
        <span className="text-muted small">Showing 1 to 5 of 67 bets</span>
      </div>
    </div>
  );
}
