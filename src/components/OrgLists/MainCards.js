import React from "react";
import "./styles/org-cards.css";

const Card = ({
  mainLink,
  logoLink,
  name,
  description,
  tags: propsTags,
  website,
}) => {
  let tags = []; 

  if (propsTags) {
    tags = propsTags.map((tag, key) => (
      <div key={key}>
        <p>{tag}</p>
      </div>
    ));
  }

  return (
    <div className="Card-Container">
      <a className="Org-Main-Link" href={mainLink} target='blank'>
        <div className="Main-Header">
          <img
            className="Main-Logo"
            alt="the framework or language that the project is build upon"
            src={logoLink}
          />
          <p className="Main-Title">{name}</p>
        </div>
        <p className="website"> {website} </p>
        <div className="Main-Body">
          <div className="Main-Tag">{tags}</div>
          <div className="Main-Description">
            <p> {description}</p>
          </div>
        </div>
        <div className="Main-Link">Link to GitHub</div>
      </a>

    </div>
  );
};

export default Card;