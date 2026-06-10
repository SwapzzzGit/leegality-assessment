import React from 'react';

export default function Pagination({ page = 1, total = 1, onChange = () => {} }) {
  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)}>Prev</button>
      <span>{page} / {total}</span>
      <button disabled={page >= total} onClick={() => onChange(page + 1)}>Next</button>
    </div>
  );
}
