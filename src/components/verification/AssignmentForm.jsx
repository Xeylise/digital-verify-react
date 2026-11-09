import React, { useState } from 'react';

/**
 * AssignmentForm component.
 * Allows compliance leads to delegate and reassign cases among internal verification analysts.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.currentAssignee='Unassigned'] - Currently assigned analyst name.
 * @param {string[]} [props.analysts] - List of available internal compliance officers.
 * @param {Function} [props.onAssign] - Callback invoked when a new assignee is selected.
 * @param {string} [props.className=''] - Additional CSS classes.
 * @returns {JSX.Element} The rendered analyst assignment selector.
 */
export default function AssignmentForm({
  currentAssignee = 'Unassigned',
  analysts = ['Unassigned', 'Paola Castro', 'Carlos Mendoza', 'Valentina Gil'],
  onAssign,
  className = '',
}) {
  const [assignee, setAssignee] = useState(currentAssignee);
  const [isSaved, setIsSaved] = useState(false);

  /**
   * Handles selection changes and updates assignment state.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The select change event.
   */
  const handleSelectChange = (event) => {
    const selectedAnalyst = event.target.value;
    setAssignee(selectedAnalyst);
    setIsSaved(true);
    if (onAssign) onAssign(selectedAnalyst);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className={`p-3 rounded-3 mb-3 ${className}`} style={{ backgroundColor: '#070a14', border: '1px solid var(--winarena-border)' }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <label className="fw-bold text-white small mb-0" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          <i className="fa-solid fa-user-gear me-1 text-primary"></i> Asignar Analista
        </label>
        {isSaved && (
          <span className="text-success small" style={{ fontSize: '11px' }}>
            <i className="fa-solid fa-check"></i> Asignado
          </span>
        )}
      </div>

      <select
        className="form-select text-white"
        style={{
          backgroundColor: '#0c1220',
          border: '1px solid var(--winarena-border)',
          fontSize: '13px',
          color: '#ffffff'
        }}
        value={assignee}
        onChange={handleSelectChange}
      >
        {analysts.map((analystName, index) => (
          <option key={index} value={analystName} style={{ backgroundColor: '#0c1220' }}>
            {analystName}
          </option>
        ))}
      </select>
    </div>
  );
}
