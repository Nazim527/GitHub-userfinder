import React from "react";
import "./style.scss";
import { IGitHubUsers } from "../../../../types/user";
import { ApartmentRounded, LinkOutlined, LocationOnOutlined } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { InfoItem } from "..";

type IUserInfoProps = Pick<
  IGitHubUsers,
  "blog" | "twitter_username" | "location" | "company"
>;

const UserInfo: React.FC<IUserInfoProps> = ({
  blog,
  company,
  twitter_username,
  location,
}) => {

  const items = [
    {id: 1,icon: <LocationOnOutlined/>, text: location},
    {id: 2,icon: <LinkOutlined/>, text: blog},
    {id: 3,icon: <XIcon/>, text: twitter_username},
    {id: 4,icon: <ApartmentRounded/>, text: company},
  ]
  return (
    <div className="userinfo">
      {items.map((item) => (
        <InfoItem {...item} key={item.id}/>
      ))}
    </div>
  );
};

export default UserInfo;
