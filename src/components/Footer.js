import React from "react";
import { Link } from "react-router-dom";
import secrets from "../secrets";
import { translator, ts } from "../js/translation";

import { ReactComponent as MailIcon } from "../imgs/mail.svg";
import { ReactComponent as GithubIcon } from "../imgs/github.svg";
import { ReactComponent as LinkedInIcon } from "../imgs/linkedin.svg";
import { MySocialMediaLinks, NavBarLinks } from "./comps";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    // Else it will NOT update right
    translator.registerToOnChange(() => {
      this.forceUpdate();
    });
  }

  render() {
    const h1Formatting = "font-round text-lg mt-2 mb-1";
    const boxFormatting = "flex flex-col justify-center items-center mb-3";

    return (
      <footer className="mt-8">
        <hr />

        <div className="flex flex-col sm:flex-row justify-around">
          {/* Contact */}
          <div className={boxFormatting}>
            <h1 className={`${h1Formatting}`}>{ts.footer.titleContact}</h1>
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
            <div className={h1Formatting}>{ts.footer.titleInfo}</div>
            <div className="flex">
              <NavBarLinks />
            </div>
          </div>
        </div>
        <div className="text-center w-full mt-3 mb-2 font-round text-sm text-gray-500">
          Copyright © 2021 by Roland Strasser
        </div>
      </footer>
    );
  }
}

export default Footer;
