import { useState } from 'react'
import { defaultUser } from './types'
import { IGitHubUsers } from './types/user'
import { Container, Header, Search } from './components'

function App() {
  const [user, setuser] = useState<IGitHubUsers | null>(defaultUser)

  const fetchUser = async (userName: string) => {}

  return (
    <>
      <Container> 
        <Header/>
        <Search/>
      </Container>
    </>
  )
}

export default App
