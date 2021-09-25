import React from "react";
// import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import Media from "react-media";
import { ReactComponent as MailIcon } from "../imgs/mail.svg";
import { ReactComponent as GithubIcon } from "../imgs/github.svg";
import { ReactComponent as LinkedInIcon } from "../imgs/linkedin.svg";
import secrets from "../secrets";
import { MySocialMediaLinks, NavBarLinks } from "./comps";

class Footer extends React.Component {
  render() {
    const h1Formatting = "font-round text-lg mt-2 mb-1";
    const boxFormatting = "flex flex-col justify-center items-center mb-3";

    return (
      <div className="mt-8">
        <hr />

        <div className="flex flex-col sm:flex-row justify-around">
          {/* Contact */}
          <div className={boxFormatting}>
            <h1 className={`${h1Formatting}`}>Kontakt</h1>
            <a
              className="font-round flex items-center"
              href={`mailto:${secrets.CONTACT_EMAIL}`}
            >
              <MailIcon className="w-5 h-5 mr-2" />
              <p>{secrets.CONTACT_EMAIL}</p>
            </a>
            <div className="mt-2">
              <MySocialMediaLinks />
            </div>
          </div>

          {/* Information */}
          <div className={boxFormatting}>
            <div className={h1Formatting}>Information</div>
            <div className="flex">
              <NavBarLinks />
            </div>
          </div>
        </div>
        <div className="text-center w-full mt-3 mb-2 font-round text-sm text-gray-500">
          Copyright © 2021 by Roland Strasser
        </div>
      </div>
    );
  }
}

export default Footer;
