import React from "react";
import { Link } from "react-router-dom";
import secrets from "../secrets";

import { ReactComponent as MailIcon } from "../imgs/mail.svg";
import { ReactComponent as GithubIcon } from "../imgs/github.svg";
import { ReactComponent as LinkedInIcon } from "../imgs/linkedin.svg";

function MySocialMediaLinks() {
  return (
    <div className="flex">
      <a href={secrets.LINK_LINKEDIN} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="w-8 h-8" />
      </a>
      <a href={secrets.LINK_GITHUB} target="_blank" rel="noopener noreferrer">
        <GithubIcon className="w-8 h-8 ml-2" />
      </a>
    </div>
  );
}

function NavBarLinks() {
  return (
    <>
      <Link to="/">
        <p className="mx-8 text-gray-600 hover:underline">About Me</p>
      </Link>
      <Link to="/contact">
        <p className="mx-8 text-gray-600 hover:underline">Kontakt</p>
      </Link>
    </>
  );
}

const styleBlueButton = `px-6 py-2 bg-blue-700
border-2 rounded-full shadow-lg
text-white font-round
cursor-pointer
transform transition hover:scale-110`;

export { MySocialMediaLinks, NavBarLinks, styleBlueButton };
