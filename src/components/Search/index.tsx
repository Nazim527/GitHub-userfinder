import React from 'react'
import './style.scss'
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '..';


interface ISearchProps {
  hasError?: boolean;
  onSubmit: (text:string) => void
}
const Search: React.FC<ISearchProps> = ({hasError,onSubmit}) => {
  const [userName, setUserName] = React.useState<string>("")
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(userName.trim()) {
      onSubmit(userName)
      setUserName("")
    }
  }
  console.log(userName);
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <label htmlFor="search" className='label'>
          <SearchIcon className='search_icon'/>
        </label>
        <input type="text"
        className='textField'
        name='username'
        placeholder='Search Github username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>

        {hasError  && (
          <div className='error'>No Result</div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
}

export default Search  