import { useEffect, useState } from 'react'
import { Divider } from './commons/Divider'
import { UsersFilter } from './components/UsersFilter'
import { UsersList } from './components/UsersList/index'
import { useApp } from './hooks/useApp'

function App() {
  const {
    appStyles,
    containerStyles,
    usersFilterProps,
    userProps,
  } = useApp()
  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        <UsersList {...userProps} />
        <Divider direction="vertical" />
        <UsersFilter {...usersFilterProps} />
      </div>
    </div>
  )
}

export default App
