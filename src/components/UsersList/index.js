import React from 'react'
import {
  borderStyles,
  headerUserListStyle,
  tableStyles,
  thTdStyles,
} from '../../styles/styles'
import { OrbitProgress } from 'react-loading-indicators'
import { Divider } from '../../commons/Divider'
import { Pagination } from '../Pagination'

export const UsersList = (props) => {
  const {
    usersByPage,
    loading,
    error,
    page,
    setPage,
    totalPages,
    filteredUsers,
  } = props

  const dataToShow = ['Name', 'Lastname', 'Phone', 'Email']

  const buttonProps = {
    page,
    setPage,
    totalPages,
  }

  return !loading ? (
    <div>
      <div style={headerUserListStyle}>
        <h1 style={{ color: '#E0E0E0' }}>Users List</h1>
        {!loading && !error && <Pagination {...buttonProps} />}
      </div>
      <Divider />

      {!error ? (
        <table style={tableStyles}>
          <thead>
            <tr>
              {dataToShow.map((data, index) => {
                const isLast = index === dataToShow.length - 1

                const thStyles = {
                  ...thTdStyles,
                  color: '#E0E0E0',
                }

                return (
                  <th key={index} style={thStyles}>
                    {data}
                    {!isLast && (
                      <span
                        style={{ ...borderStyles, right: '0', top: '10%' }}
                      />
                    )}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody
            style={{ borderBottom: '1px solid #E0E0E0', color: '#E0E0E0' }}
          >
            {!filteredUsers.length ? (
              <>
                {usersByPage[page]?.map((user, index) => (
                  <tr
                    style={{
                      borderBottom: '1px solid rgba(169, 169, 169, 0.5)',
                    }}
                    key={index}
                  >
                    <td style={{ padding: '10px' }}>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {filteredUsers?.map((user, index) => (
                  <tr
                    style={{
                      borderBottom: '1px solid rgba(169, 169, 169, 0.5)',
                      marginTop: '20px',
                    }}
                    key={index}
                  >
                    <td style={{ padding: '10px' }}>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      ) : (
        <div>Something was wrong!</div>
      )}
    </div>
  ) : (
    <OrbitProgress
      color="#a5acb7"
      size="small"
      text=""
      textColor=""
      style={{ marginTop: '30px' }}
    />
  )
}
