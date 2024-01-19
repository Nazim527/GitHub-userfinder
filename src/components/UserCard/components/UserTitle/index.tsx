import React from 'react';
import { IGitHubUsers } from '../../../../types/user';
import './style.scss'

type IUserTitleProps = Pick<IGitHubUsers, "name" | "login" | "created_at">

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  return new Intl.DateTimeFormat("en-GB", options).format(new Date(dateString));
};

const UserTitle: React.FC<IUserTitleProps> = ({ created_at, login, name }) => {
  const formattedDate = formatDate(created_at);

  return (
    <div className='usertitle'>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{formattedDate}</span>
    </div>
  );
};

export default UserTitle;
