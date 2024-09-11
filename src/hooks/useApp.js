import { useEffect, useState } from 'react'

export const useApp = () => {
  const [usersByPage, setUsersByPage] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(5)
  const resultsPerPage = 10
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setTotalPages(parseInt(resultsPerPage / 2))
    if (!usersByPage[page]) {
      fetchUsers(page)
    }
  }, [page])

  const fetchUsers = async (page) => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`
      )
      const data = await response.json()
      setUsersByPage((prevUsers) => ({
        ...prevUsers,
        [page]: data.results,
      }))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(true)
      setLoading(false)
    }
  }

  const appStyles = {
    textAlign: 'center',
    display: 'grid',
    justifyItems: 'center',
  }

  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    gap: '20px',
    width: '80vw',
    alignSelf: 'center',
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()

    setSearchQuery(query)

    const filtered = usersByPage[page].filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(query)
    )

    setFilteredUsers(filtered)
  }

  const usersFilterProps = {
    searchQuery,
    handleSearch,
    loading,
  }

  const userProps = {
    usersByPage,
    loading,
    error,
    page,
    setPage,
    totalPages,
    filteredUsers,
    setFilteredUsers,
  }

  return {
    appStyles,
    containerStyles,
    usersFilterProps,
    userProps,
  }
}
