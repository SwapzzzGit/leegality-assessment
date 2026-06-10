import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../store/productsSlice'
import './Pagination.scss'

export default function Pagination() {
  const dispatch = useDispatch()
  const { page, limit, total } = useSelector((s) => s.products.pagination)

  const totalPages = Math.ceil(total / limit)
  if (totalPages <= 1) return null

  function getPageNumbers() {
    const pages = []
    const start = Math.max(1, page - 2)
    const end = Math.min(totalPages, page + 2)
    for (let i = start; i <= end; i++) pages.push(i)
    return pages
  }

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={page === 1}
        onClick={() => dispatch(setPage(page - 1))}
      >
        ← Previous
      </button>

      {getPageNumbers().map((num) => (
        <button
          key={num}
          className={`page-btn ${num === page ? 'active' : ''}`}
          onClick={() => dispatch(setPage(num))}
        >
          {num}
        </button>
      ))}

      <button
        className="page-btn"
        disabled={page === totalPages}
        onClick={() => dispatch(setPage(page + 1))}
      >
        Next →
      </button>
    </div>
  )
}