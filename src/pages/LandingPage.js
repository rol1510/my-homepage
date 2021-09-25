import React, { useState } from "react";
import profileImg from "../imgs/Foto-2020-2.png";
import skillsImg from "../imgs/skills.png";
import skills2Img from "../imgs/skills-2.png";
import educationImg from "../imgs/education.png";

import icons from "../js/icons";

function MeCard(props) {
  // 😃 or 😊 (on hover)
  const [currentEmoji, setEmoji] = useState("😃");

  return (
    <div className="relative my-8 md:my-16 flex justify-center items-center">
      <div className="relative flex items-center justify-center w-72 h-72 ">
        <div className="absolute top-0 left-0 w-full h-full ">
          <div
            className="absolute top-0 left-0
            bg-indigo-500 opacity-50 w-52 h-52 rounded-full
            mix-blend-multiply filter blur-lg
            animate-move "
          />
          <div
            className="absolute top-0 left-0
            bg-blue-300 w-52 h-52 rounded-full
            mix-blend-multiply filter blur-lg
            animate-move animation-delay-1"
          />
          <div
            className="absolute top-0 left-0
            bg-blue-600 opacity-50 w-52 h-52 rounded-full
            mix-blend-multiply filter blur-lg
            animate-move animation-delay-2"
          />
        </div>

        <div
          className="overflow-hidden rounded-full w-56 h-56 border-4
                       border-gray-500 shadow-md"
        >
          <img
            className="relative -top-2 object-cover"
            src={profileImg}
            alt="Roland in suite"
          />
        </div>
      </div>

      <div className="ml-8">
        <p
          className="text-3xl font-round mb-4"
          onMouseEnter={() => {
            setEmoji("😊");
          }}
          onMouseLeave={() => {
            setEmoji("😃");
          }}
        >
          Hallo! {currentEmoji}
        </p>

        <p>
          <span className="text-2xl font-round mb-2 text-gray-800">
            {/* {"Ich heiße"} */}
          </span>
          <span className="text-4xl font-round mb-2 text-blue-700 font-bold">
            {" Roland Strasser"}
          </span>
        </p>
        <p className="text-md font-round text-gray-500">
          Student TU-Wien | Front-End Entwickler
        </p>
        <p className="text-md font-round text-gray-500">
          Links Github LinkedIn
        </p>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="w-full lg:w-250 m-6 bg-white rounded-md shadow-md">
      <div className="w-full relative">
        <div className={`absolute ${props.isInverted ? "right-0" : ""}`}>
          <div
            className={`relative w-64 py-3
                       bg-blue-700 rounded-md shadow
                       text-2xl font-bold font-round text-white text-center
                       ${
                         props.isInverted ? "inset-x-2 -inset-y-2" : "-inset-2"
                       }`}
          >
            {props.title}
          </div>
        </div>
      </div>

      <div className="flex justify-between p-4">
        {props.isInverted && (
          <div className="w-1/2 flex items-center">
            <img src={props.img} className="rounded shadow" />
          </div>
        )}
        <div className="px-4 pt-12 w-full">{props.children}</div>
        {!props.isInverted && (
          <div className="w-1/2 flex items-center">
            <img src={props.img} className="rounded shadow" />
          </div>
        )}
      </div>
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

function TimelineComp(props) {
  return (
    <li className="mt-3">
      <div className="flex items-center">
        <div
          className="w-6 h-6 ml-4 mr-7 flex-shrink-0 
                     border-4 border-blue-700 rounded-full"
        />
        <div>
          <p className="font-round text-lg font-bold">{props.title}</p>
          <p className="font-round text-sm text-gray-800 -mt-1">{props.time}</p>
          <p className="font-round text-md">{props.children}</p>
        </div>
      </div>
    </li>
  );
}

function Timeline(props) {
  return <ul>{props.children}</ul>;
}

function SkillPoint(props) {
  const Icon = props.icon;

  return (
    <div className={`mx-2 ${props.animate ? "animate-icon" : ""}`}>
      <div className=" w-8 h-8 mx-auto">
        {typeof props.icon !== "undefined" && <Icon />}
      </div>
      <p className="font-round text-center mt-1 font-">{props.text}</p>
    </div>
  );
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    /* For the icon animation in the skills section
     * set len to the amount of icons (or more)
     * use maxIndex to controll the 'delay' between loops */
    const len = 12;
    const maxIndex = len * 4;

    this.state = {
      icons: this.createBoolArray(len),
    };

    /* For the icon animation in the skills section
     * What's happening is:
     *    - this.state.icons is an array of booleans
     *    - each icon get one of those bools assigned, which inturn toggles the 'animate-icon' class
     *      - if we flip the bool to false and back to true the animation plays once
     *    - now by 'moving' that one false bool through the array we can start the animation
     *      individually and create this 'laola' effect */
    let index = 0;
    setInterval(() => {
      if (index > maxIndex) index = 0;
      this.setState({
        icons: this.createBoolArray(len, index),
      });
      index++;
    }, 100);
  }

  /* Creates an array of booleans of the provided 'length'.
   * every bool will be true except for the one at 'currentIndex'
   * This is used to animate the logos in the skills section
   * if 'currentIndex' < 0 -> everything will be true */
  createBoolArray(length, currentIndex = -1) {
    const arr = Array(length).fill(true);
    if (currentIndex >= 0 && currentIndex < length) {
      arr[currentIndex] = false;
    }
    return arr;
  }

  render() {
    return (
      <div>
        <MeCard />
        <div
          className="angle-top pt-40 pb-40 px-10
                     bg-gray-200 flex flex-col items-center"
        >
          <Card title="About Me" img={skillsImg}>
            <p>
              <strong>Hallo!</strong> <br />
              Ich heiße Roland, bin 19 Jahre alt und habe Spaß an der
              Softwareentwicklung.
              <br />
              Zurzeit leiste ich meinen Wehrdienst ab und werde im Frühjahre
              2022 and der TU-Wien mit meinem Informatikstuium beginnen. <br />
              Mein Ziel ist es nebenbei schon als Softwarentwickler zu arbeiten
              um bereits wärend des Stuiums berufserfahrungen zu sammeln und mit
              dem Verdienst mein Studium zu unterstützen.
            </p>
          </Card>
          <Card title="Skills" img={skills2Img} isInverted={true}>
            <div className="">
              <h1 className="text-xl">Front-End</h1>
              <div className="flex justify-center items-center mt-4">
                <SkillPoint
                  animate={this.state.icons[1]}
                  text="JavaScript"
                  icon={icons.IconJavaScript}
                />
                <SkillPoint
                  animate={this.state.icons[2]}
                  text="HTML"
                  icon={icons.IconHTML}
                />
                <SkillPoint
                  animate={this.state.icons[3]}
                  text="CSS"
                  icon={icons.IconCSS}
                />
                <SkillPoint
                  animate={this.state.icons[4]}
                  text="React"
                  icon={icons.IconReact}
                />
              </div>
              {/* <p>Tailwind, SCSS</p> */}

              <h1 className="text-xl">Backend</h1>
              <div className="flex justify-center items-center mt-4">
                <SkillPoint
                  animate={this.state.icons[0]}
                  text="Python"
                  icon={icons.IconPython}
                />
                <SkillPoint
                  animate={this.state.icons[1]}
                  text="NodeJs"
                  icon={icons.IconNodeJs}
                />
                <SkillPoint
                  animate={this.state.icons[2]}
                  text="GitHub"
                  icon={icons.IconGitHub}
                />
                <SkillPoint
                  animate={this.state.icons[3]}
                  text="Linux"
                  icon={icons.IconLinux}
                />
                <SkillPoint
                  animate={this.state.icons[4]}
                  text="Windows"
                  icon={icons.IconWindows}
                />
                <SkillPoint
                  animate={this.state.icons[5]}
                  text="NPM"
                  icon={icons.IconNPM}
                />
              </div>

              <h1 className="text-xl">Tooling</h1>
              <p>
                git, github, npm, linux, windows, ..., Visual Studio Code,
                Visual Studio
              </p>
              <h1 className="text-xl">Andere Programme</h1>
              <p>
                Word, Excel, PowerPoint, Outlook <br />
                Figma, Adobe Xd
              </p>
              <h1 className="text-xl">Sprachen</h1>
              <p>
                Deutsch - Muttersprache <br />
                Englisch - Fließend in Wort und Schrift
              </p>
            </div>
          </Card>

          <Card title="Bildung" img={educationImg}>
            <Timeline>
              <TimelineComp title="HTL 1 Lastenstraße" time="2016 - 2021">
                Fachgebiet Mechatronik
              </TimelineComp>
              <TimelineComp
                title="NMS St. Michael"
                time="2012 - 2016"
              ></TimelineComp>
              {/* <TimelineComp
                title="Volksschule St.Michael"
                time="2008 - 2012"
              ></TimelineComp> */}
            </Timeline>
          </Card>
          <Card title="Berufserfahrung" img={educationImg} isInverted={true}>
            <Timeline>
              <TimelineComp title="Praktikum" time="4 Wochen | Sommer 2019">
                Elektrotechniker bei SW Automatisierung GmbH
              </TimelineComp>
              <TimelineComp title="Praktikum" time="5 Wochen | Sommer 2018">
                Elektrotechniker bei ASFINAG Autobahn
              </TimelineComp>
              <TimelineComp title="Praktikum" time="4 Wochen | Sommer 2017">
                Elektriker bei Elektron Franz Schlick GmbH
              </TimelineComp>
            </Timeline>
          </Card>

          <Card title="Projekte">
            <div className="flex  flex-col lg:flex-row">
              <div>Diplomarbeit</div>
              <div>Personal Webside</div>
              <div>Shop Website - WIP</div>
            </div>
          </Card>
        </div>
        <div className="angle-top-invert py-16 -mt-28 bg-white"></div>
      </div>
    );
  }
}

export default LandingPage;
