import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import { NavBarLinks } from "./comps";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };

    this.handleExpandLinks = this.handleExpandLinks.bind(this);
  }

  handleExpandLinks(event) {
    this.setState({ expanded: !this.state.expanded });
  }

  render(props) {
    const queries = {
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)",
    };

    const dotStyle = "bg-gray-500 w-1.5 h-1.5 rounded-full m-0.5";
    return (
      <header>
        <div className="flex justify-between items-center m-5">
          <Link to="/">
            <div className="flex items-center">
              <div
                className="w-12 h-12 bg-blue-700
                         flex justify-center items-center
                         text-white font-round font-bold text-3xl
                         rounded-full
                         bg-gradient-to-tr from-purple-700 to-blue-700"
              >
                R
              </div>
              <p className="ml-2 text-xl font-round">Roland Strasser</p>
            </div>
          </Link>

          <Media queries={queries}>
            {(matches) => (
              <Fragment>
                {(matches.medium || matches.large) && (
                  <div className="flex justify-between items-center">
                    <NavBarLinks />
                  </div>
                )}

                {matches.small && (
                  <button
                    className="w-12 h-12 hover:bg-gray-200 rounded-full
                                flex justify-center items-center"
                    onClick={this.handleExpandLinks}
                  >
                    <div className={dotStyle} />
                    <div className={dotStyle} />
                    <div className={dotStyle} />
                  </button>
                )}
              </Fragment>
            )}
          </Media>
        </div>
        <div>
          <Media queries={queries}>
            {(matches) => (
              <Fragment>
                {matches.small && this.state.expanded && (
                  <div
                    className="flex flex-col items-center
                                 animate-appear"
                  >
                    <Link to="/contact">
                      <p className="text-gray-600 hover:underline">Contact</p>
                    </Link>
                    <div className="w-40 h-px p-0 my-2 bg-gray-300 rounded-full" />
                    <Link to="/resources">
                      <p className="text-gray-600 hover:underline">Resources</p>
                    </Link>
                    <div className="w-40 h-px p-0 my-2 bg-gray-300 rounded-full" />
                    <Link to="/samples">
                      <p className="text-gray-600 hover:underline">Samples</p>
                    </Link>
                  </div>
                )}
              </Fragment>
            )}
          </Media>
        </div>
      </header>
    );
  }
}

export default NavBar;
