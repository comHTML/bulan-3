

const FILTER_OPTIONS = [
  { value: 'All', label: 'Semua' },
  { value: 'Active', label: 'Aktif' },
  { value: 'Completed', label: 'Selesai' }
];

function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="filter-container">
      {FILTER_OPTIONS.map(({ value, label }) => (
        <button
          key={value}
          className={`filter-btn ${filter === value ? 'active' : ''}`}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
