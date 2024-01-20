import React from "react";
import "./style.scss";

interface IInfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

const InfoTitle: React.FC<IInfoItemProps> = ({icon, isLink,text}) => {
  const currentText = text || "Not Avaliable"
  let currentHref = ""

  if(isLink){
    currentHref = text && text.startsWith("http") ? text : `https://${text}`
  }
  return <div className="infoitem">
    {icon}
    {isLink && text ? (
      <a href={currentHref} target="_blank">{currentText}</a>
    ): (
      currentText
    )}
  </div>;
};

export default InfoTitle;
