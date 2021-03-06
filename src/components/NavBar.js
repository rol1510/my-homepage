import React, { useState } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import { NavBarLinks } from "./comps";
import { translator, ts } from "../js/translation";

function LanguageButton(props) {
  return (
    <button
      onClick={() => {
        translator.setLang(props.lang);
        console.log(translator.strings.lang.english);
      }}
      className={`flex items-center py-2 px-4 w-full
      border-l-4 border-transparent hover:bg-blue-100
      ${
        translator.currentLang === props.lang
          ? "bg-white border-blue-700"
          : "bg-gray-100"
      }`}
    >
      <p className="font-round text-md">{props.title}</p>
    </button>
  );
}

function LanguageSelector(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative mobile:mt-2 mobile:mb-4 ${props.className}`}
      onMouseLeave={() => setOpen(false)}
      onScroll={() => setOpen(false)}
    >
      <button
        className="relative py-1 px-2 mobile:py-2 mobile:px-5
                   rounded-full border transition z-50
                   border-transparent transform
                   hover:border-gray-200 hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        <p className="text-gray-700">
          {"🌐 "}
          <span className="font-round">
            {translator.currentLang.toUpperCase()}
          </span>
        </p>
      </button>

      {(open || true) && (
        <div
          className={`absolute -mt-2 pt-6 right-0 z-40
                animate-appear-top animation-perserve
                ${open ? "animate-appear-top" : "animate-disappear-top"}`}
        >
          <div className="relative border shadow-lg rounded-md bg-white">
            <div
              className="w-4 h-4 transform rotate-45 bg-white border
                         absolute mx-auto -top-2 right-6"
            />

            <div className="relative mt-0 bg-white rounded-md overflow-hidden">
              <LanguageButton title="English" lang="en" />
              <LanguageButton title="Deutsch" lang="de" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <div
        className="w-10 h-10 bg-blue-700
           flex justify-center items-center
           text-white font-round font-bold text-2xl
           rounded-full
           bg-gradient-to-tr from-purple-700 to-blue-700"
      >
        R
      </div>
      <p className="ml-2 text-xl font-round">Roland Strasser</p>
    </div>
  );
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false, scrollPercentage: 0 };

    this.handleExpandLinks = this.handleExpandLinks.bind(this);

    // Else the NavBar will NOT update right
    translator.registerToOnChange(() => {
      this.forceUpdate();
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    window.addEventListener("touchmove", () => this.setDropdownState(false));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
    window.removeEventListener("touchmove", () => this.setDropdownState(false));
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      scrollPercentage: scrolled,
    });
  };

  handleExpandLinks(event) {
    this.toggleDropdownState();
  }

  setDropdownState(isOpen) {
    this.setState({ expanded: isOpen });
  }

  toggleDropdownState() {
    this.setDropdownState(!this.state.expanded);
  }

  render(props) {
    const queries = {
      mobile: "(max-width: 699px)",
      desktop: "(min-width: 700px)",
    };

    const dotStyle = "bg-gray-500 w-1.5 h-1.5 rounded-full m-0.5";
    return (
      <header
        // on mobile bg has to be transaprent or else the nice glow around the
        // picture will clip
        className={`sticky bg-white  w-screen top-0 z-50 transition
                    ${
                      this.state.scrollPercentage > 0
                        ? "shadow-md"
                        : "mobile:bg-transparent"
                    }`}
        onMouseLeave={() => {
          this.setDropdownState(false);
        }}
      >
        <div className="flex justify-between items-center p-4">
          <Link to="/">
            <Logo />
          </Link>

          {/* Links in normal mode, else draw the dots */}
          <Media queries={queries}>
            {(matches) => (
              <>
                {matches.desktop && (
                  <div className="flex justify-between items-center">
                    <NavBarLinks />
                    <LanguageSelector className="ml-4 mr-6" />
                  </div>
                )}

                {matches.mobile && (
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
              </>
            )}
          </Media>
        </div>

        {/* Drop down */}
        <Media queries={queries}>
          {(matches) => (
            <>
              {matches.mobile && this.state.expanded && (
                <div
                  className="flex flex-col items-center
                                 animate-appear"
                >
                  <NavBarLinks />
                  <LanguageSelector />
                </div>
              )}
            </>
          )}
        </Media>
      </header>
    );
  }
}

export default NavBar;
