import React from 'react'
import { buttonStyles, paginateStyles } from '../../styles/styles'

export const Pagination = (props) => {

  const { page, setPage, totalPages } = props
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div style={paginateStyles}>
      <button
        disabled={page === 1}
        style={buttonStyles}
        onClick={handlePreviousPage}
      >
        &larr;
      </button>
      <span style={{ color: '#E0E0E0' }}>
        Page {page}/{totalPages}
      </span>
      <button
        disabled={page === parseInt(totalPages)}
        style={buttonStyles}
        onClick={handleNextPage}
      >
        &rarr;
      </button>
    </div>
  )
}
