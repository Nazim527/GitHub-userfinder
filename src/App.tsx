import { useState } from 'react'
import { defaultUser } from './types'
import { IGitHubUsers } from './types/user'
import { Container, Header, Search, UserCard } from './components'
import { isGitHubUser } from './util/typeGuard'
import { extractLocalUser } from './util/extractLocalUser'

const BASE_URL = "https://api.github.com/users/"
function App() {
  const [user, setUser] = useState<IGitHubUsers | null>(defaultUser)

  const fetchUser = async (userName: string) => {
    const url = BASE_URL + userName;

    const res = await fetch(url);
    const user = (await res.json()) as IGitHubUsers;

    console.log(user);
    
    if(isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <>
      <Container> 
        <Header/>
        <Search hasError={!user} onSubmit={fetchUser}/>
        {user && <UserCard {...user}/>}
      </Container>
    </>
  )
}

export default App
