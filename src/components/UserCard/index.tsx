import React from "react";
import "./style.scss";
import { UserInfo, UserStat, UserTitle } from "./components";
import { IGitHubUsers } from "../../types/user";

const UserCard: React.FC<IGitHubUsers> = (props) => {
  const {
    login,
    avatar_url,
    created_at,
    bio,
    name,
    followers,
    following,
    public_repos,
    blog,
    company,
    location,
    twitter_username
  } = props;
  return (
    <div className="usercard">
      <img className="avatar" src={avatar_url} alt={login} />
      <UserTitle created_at={created_at} name={name} login={login} />
      <p className="user_bio">{bio || "This profile has no bio"}</p>
      <UserStat
        public_repos={public_repos}
        followers={followers}
        following={following}
      />
      <UserInfo blog={blog} company={company} location={location} twitter_username={twitter_username} />
    </div>
  );
};

export default UserCard;
