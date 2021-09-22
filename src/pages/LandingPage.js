import React from "react";
import profileImg from "../imgs/Foto-2020-2.png";
// import profileImg from "../imgs/Foto-2020.jpg";
import { Link } from "react-router-dom";

function MeCard(props) {
  return (
    <div className="my-8 md:my-16 flex justify-center">
      <div className="">
        <div className="flex items-center">
          <div className="overflow-hidden rounded-full w-52 h-52 border-4 border-gray-500 shadow-md">
            <img
              className="relative -top-2 object-cover"
              src={profileImg}
              alt="Of Roland in suite"
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
  );
}

function Card(props) {
  return (
    <div className="lg:w-full m-6 p-4 border-2 rounded-md shadow-md">
      <div>
        <div
          className="relative -inset-6 bg-blue-700 rounded-md shadow p-2 pl-4
                        text-xl font-round text-white text-center"
        >
          {props.title}
        </div>
      </div>
      {props.children}
    </div>
  );
}

function EduEntry(props) {
  return (
    <div className="flex items-center">
      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
      <p className="ml-2 text-gray-700">{props.timespan}</p>
      <p className="ml-2 text-lg">{props.title}</p>
    </div>
  );
}

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        {/* <MeCard /> */}
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="font-round font-bold text-blue-700  text-3xl">
            Landing page not done yet! 👷
          </p>
          <p className="mt-6 font-round text-1xl">
            {"The "}
            <Link to="/contact" className="text-blue-500 hover:underline">
              Contact
            </Link>
            {" Page works"}
          </p>
        </div>
      </div>
    );
  }
}

export default LandingPage;
