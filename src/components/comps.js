import React from "react";
import { Link } from "react-router-dom";
import secrets from "../secrets";
import { translator, ts } from "../js/translation";
import { useLocation } from "react-router-dom";

import { ReactComponent as MailIcon } from "../imgs/mail.svg";
import { ReactComponent as GithubIcon } from "../imgs/github.svg";
import { ReactComponent as LinkedInIcon } from "../imgs/linkedin.svg";

function MySocialMediaLinks() {
  return (
    <div className="flex">
      <a href={secrets.LINK_LINKEDIN} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="w-8 h-8 mobile:w-10 mobile:h-10" />
      </a>
      <a href={secrets.LINK_GITHUB} target="_blank" rel="noopener noreferrer">
        <GithubIcon className="w-8 h-8 mobile:w-10 mobile:h-10 ml-2 mobile:ml-4" />
      </a>
    </div>
  );
}

function NavBarLink(props) {
  return (
    <Link to={props.to}>
      <p className="mx-8 text-gray-600 hover:underline">{props.text}</p>
    </Link>
  );
}

function NavBarLinks(props) {
  const location = useLocation();

  const showAboutMe = () => {
    return location.pathname !== "/";
  };

  return (
    <>
      {showAboutMe() && <NavBarLink to="/" text={ts.navbar.aboutme} />}
      <NavBarLink to="/contact" text={ts.navbar.contact} />
    </>
  );
}

const styleBlueButton = `px-6 py-2 bg-blue-700
border-2 rounded-full shadow-lg
text-white font-round
cursor-pointer
transform transition hover:scale-110`;

export { MySocialMediaLinks, NavBarLinks, NavBarLink, styleBlueButton };
