import React from 'react'
import { IGitHubUsers } from '../../../../types/user'
import './style.scss'

type IUserStatProps = Pick<IGitHubUsers, "followers" | "following" | "public_repos">

const UserStatus: React.FC<IUserStatProps> = ({public_repos,followers,following}) => {
  return (
    <div className='userstat'>
      <div className="info">
        <div className="infoTitle">Repos</div>
        <div className="info_number">{public_repos}</div>
      </div>
      <div className="info">
        <div className="infoTitle">Following</div>
        <div className="info_number">{following}</div>
      </div>
      <div className="info">
        <div className="infoTitle">Followers</div>
        <div className="info_number">{followers}</div>
      </div>
    </div>
  )
}

export default UserStatus