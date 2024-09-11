import React, { useState } from 'react'

export const UsersFilter = (props) => {
  const { searchQuery, handleSearch, loading } = props

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  return (
    <div>
      <label style={{ color: '#E0E0E0', display: 'flex', marginBottom: '20px' }}>You can search a user by name*</label>
      <input
        type="text"
        placeholder="Search a user"
        value={searchQuery}
        onChange={handleSearch}
        style={{
          height: '20px',
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: isFocused
            ? '2px solid #E0E0E0'
            : '2px solid rgba(169, 169, 169, 0.5)',
          outline: 'none',
          padding: '8px 0',
          width: '100%',
          fontSize: '16px',
          transition: 'border-bottom-color 0.3s ease',
          color: '#E0E0E0',
        }}
        disabled={loading}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}
