import React from "react";
import Separator from "sharedComponents/assets/separator.svg";

interface CardInfo {
  image: React.ReactNode;
  icon: React.ReactNode;
  headLine: string;
  description: string;
}
const Card = ({ image,icon, headLine, description }: CardInfo) => {
  return (
    <div className="single-card">
      <div className="icon-container">
        <img className="circle" src={image as any} alt="card-circle" />
        <img className="icon" src={icon as any} alt="icon-circle" />
        <img />
      </div>
      <h4 className="head-line">{headLine}</h4>
      <div>
        <img className="separator" src={Separator} alt="separator" />
      </div>
      <p className="description">{description}</p>{" "}
    </div>
  );
};

export default Card;
