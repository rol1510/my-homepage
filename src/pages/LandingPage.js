import React from "react";
import NavBar from "../components/NavBar";
import profileImg from "../imgs/Foto-2020-2.png";
// import profileImg from "../imgs/Foto-2020.jpg";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="flex justify-center">
          <div className="">
            <div className="flex items-center">
              <div className="overflow-hidden rounded-full w-52 h-52 border-4 border-gray-500 shadow-md">
                <img
                  className="relative -top-2 object-cover"
                  src={profileImg}
                />
              </div>
              <div className="ml-5">
                <h1 className="text-3xl font-round mb-2">Roland Strasser</h1>
                <p className="text-md font-round text-gray-500">
                  Student TU-Wien | Full-Stack Entwickler
                </p>
                <div className="flex justify-between">
                  <p className="text-md font-round">19 Jahre</p>
                  <p className="text-md font-round">Östrreich</p>
                </div>
                <a
                  className="text-md font-round"
                  href="mailto:roland.strasser.01@gmail.com"
                >
                  roland.strasser.01@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>LandingPage</div>
      </div>
    );
  }
}

export default LandingPage;
