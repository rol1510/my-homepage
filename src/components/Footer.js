import React from "react";
// import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import Media from "react-media";
import { ReactComponent as MailIcon } from "../imgs/mail.svg";
import { ReactComponent as GithubIcon } from "../imgs/github.svg";
import { ReactComponent as LinkedInIcon } from "../imgs/linkedin.svg";
import secrets from "../secrets";

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
            <div className="flex mt-2">
              <a
                href={secrets.LINK_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-8 h-8" />
              </a>
              <a
                href={secrets.LINK_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-8 h-8 ml-2" />
              </a>
            </div>
          </div>

          {/* Information */}
          <div className={boxFormatting}>
            <div className={h1Formatting}>Information</div>
            <div className="flex">
              <Link to="/">
                <p className="mx-5 my-1 text-gray-600 hover:underline">
                  About Me
                </p>
              </Link>
              <Link to="/contact">
                <p className="mx-5 my-1 text-gray-600 hover:underline">
                  Contact
                </p>
              </Link>
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
