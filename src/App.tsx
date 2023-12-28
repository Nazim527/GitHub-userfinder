import { useState } from 'react'
import { defaultUser } from './types'
import { IGitHubUsers } from './types/user'

function App() {
  const [user, setuser] = useState<IGitHubUsers | null>(defaultUser)

  const fetchUser = async (userName: string) => {}

  return (
    <>
      Hello
    </>
  )
}

export default App
