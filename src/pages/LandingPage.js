import React, { useState } from "react";
import { MySocialMediaLinks } from "../components/comps";
import "intersection-observer";
import { withIsVisible } from "react-is-visible";

import profileImg from "../imgs/Foto-2020-2.png";
import skillsImg from "../imgs/skills.png";
import skills2Img from "../imgs/skills-2.png";
import educationImg from "../imgs/education.png";
import icons from "../js/icons";
import IsVisible from "react-is-visible/lib/IsVisible";

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

      {/* Box right of the image */}
      <div className="ml-12">
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
        <div className="flex justify-center items-center mt-4">
          <MySocialMediaLinks />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <IsVisible once>
      {(visible) => (
        <div
          className={`w-full lg:w-250 m-6 bg-white rounded-md shadow-md
        transition duration-300 ease-in 
        transform
          ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-52"
          }`}
        >
          <div className="w-full relative">
            <div className={`absolute ${props.isInverted ? "right-0" : ""}`}>
              <div
                className={`relative w-64 py-3
                       bg-blue-700 rounded-md shadow
                       text-2xl font-bold font-round text-white text-center
                       from-blue-600 to-blue-800 bg-gradient-to-bl
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
      )}
    </IsVisible>
  );
}

function TimelineComp(props) {
  return (
    <li className="mt-3">
      <div className="flex items-center">
        <div
          className="w-6 h-6 ml-4 mr-6 flex-shrink-0
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

function SkillsContainer(props) {
  return (
    <div className="flex items-center justify-between mt-3">
      <h1 className="text-xl w-1/5 text-center">{props.title}</h1>
      <div className="flex justify-center items-center w-3/4 mt-4">
        {props.children}
      </div>
    </div>
  );
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    /* For the icon animation in the skills section
     * set len to the amount of icons (or more)
     * use maxIndex to controll the delay between loops
     * use delayPerIcon to controll the delay between icons */
    const len = 20; // TODO: Don't hardcode
    const maxIndex = len * 2;
    const delayPerIcon = 100;

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
    }, delayPerIcon);
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
              <SkillsContainer title="Frontend">
                <SkillPoint
                  animate={this.state.icons[0]}
                  text="JavaScript"
                  icon={icons.IconJavaScript}
                />
                <SkillPoint
                  animate={this.state.icons[1]}
                  text="HTML"
                  icon={icons.IconHTML}
                />
                <SkillPoint
                  animate={this.state.icons[2]}
                  text="CSS"
                  icon={icons.IconCSS}
                />
                <SkillPoint
                  animate={this.state.icons[3]}
                  text="React"
                  icon={icons.IconReact}
                />
                <SkillPoint
                  animate={this.state.icons[4]}
                  text="Tailwind"
                  icon={icons.IconReact}
                />
              </SkillsContainer>

              <SkillsContainer title="Backend">
                <SkillPoint
                  animate={this.state.icons[5]}
                  text="Python"
                  icon={icons.IconPython}
                />
                <SkillPoint
                  animate={this.state.icons[6]}
                  text="NodeJs"
                  icon={icons.IconNodeJs}
                />
                <SkillPoint
                  animate={this.state.icons[7]}
                  text="Electron"
                  icon={icons.IconNodeJs}
                />
                <SkillPoint
                  animate={this.state.icons[8]}
                  text="Linux"
                  icon={icons.IconLinux}
                />
                <SkillPoint
                  animate={this.state.icons[9]}
                  text="Windows"
                  icon={icons.IconWindows}
                />
              </SkillsContainer>

              <SkillsContainer title="Tooling">
                <SkillPoint
                  animate={this.state.icons[10]}
                  text="Git"
                  icon={icons.IconGit}
                />
                <SkillPoint
                  animate={this.state.icons[11]}
                  text="GitHub"
                  icon={icons.IconGitHub}
                />
                <SkillPoint
                  animate={this.state.icons[12]}
                  text="NPM"
                  icon={icons.IconNPM}
                />
              </SkillsContainer>

              <SkillsContainer title="Andere Programme">
                <SkillPoint
                  animate={this.state.icons[13]}
                  text="Word"
                  icon={icons.IconWord}
                />
                <SkillPoint
                  animate={this.state.icons[14]}
                  text="Excel"
                  icon={icons.IconExcel}
                />
                <SkillPoint
                  animate={this.state.icons[15]}
                  text="PowerPoint"
                  icon={icons.IconPowerPoint}
                />
                <SkillPoint
                  animate={this.state.icons[16]}
                  text="Outlook"
                  icon={icons.IconOutlook}
                />
                <SkillPoint
                  animate={this.state.icons[17]}
                  text="Figma"
                  icon={icons.IconOutlook}
                />
                <SkillPoint
                  animate={this.state.icons[18]}
                  text="Adobe Xd"
                  icon={icons.IconOutlook}
                />
              </SkillsContainer>
            </div>
          </Card>

          <Card title="Bildung" img={educationImg}>
            <div className="flex flex-col items-center justify-center">
              <Timeline>
                <TimelineComp title="TU-Wien" time="🕓 beginnent März 2022">
                  Bachelorstudium - Informatik
                </TimelineComp>
                <TimelineComp title="HTL 1 Lastenstraße" time="✔️ 2016 - 2021">
                  Matura - Fachgebiet Mechatronik
                </TimelineComp>
                <TimelineComp
                  title="NMS St. Michael"
                  time="✔️ 2012 - 2016"
                ></TimelineComp>
                {/* <TimelineComp
                title="Volksschule St.Michael"
                time="2008 - 2012"
              ></TimelineComp> */}
              </Timeline>
              <p className="mt-8 mb-4 ">
                Deutsch - Muttersprache <br />
                Englisch - Fließend in Wort und Schrift
              </p>
            </div>
          </Card>
          <Card title="Berufserfahrung" img={educationImg} isInverted={true}>
            <Timeline>
              <TimelineComp title="Praktikum" time="✔️ 4 Wochen | Sommer 2019">
                Elektrotechniker bei SW Automatisierung GmbH
              </TimelineComp>
              <TimelineComp title="Praktikum" time="✔️ 5 Wochen | Sommer 2018">
                Elektrotechniker bei ASFINAG Autobahn
              </TimelineComp>
              <TimelineComp title="Praktikum" time="✔️ 4 Wochen | Sommer 2017">
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
