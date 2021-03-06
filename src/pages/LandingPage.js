import React, { useState } from "react";
import { MySocialMediaLinks } from "../components/comps";
import "intersection-observer";
import { withIsVisible } from "react-is-visible";
import { translator, ts } from "../js/translation";
import IsVisible from "react-is-visible/lib/IsVisible";
import icons from "../js/icons";

import profileImg from "../imgs/Foto-2020-2.png";
import skillsImg from "../imgs/skills.png";
import skills2Img from "../imgs/skills-2.png";
import educationImg from "../imgs/education.png";
import teamImg from "../imgs/team.png";
import laptopImg from "../imgs/laptop.png";
import germanFlagImg from "../imgs/language-icon-de.png";
import ukUsFlagImg from "../imgs/language-icon-en.png";

function MeCard(props) {
  // 😃 or 😊 (on hover)
  const [currentEmoji, setEmoji] = useState("😃");

  return (
    <div
      className="relative my-8 md:my-16 flex justify-center items-center
                 mobile:flex-col"
    >
      {/* the image */}
      <div
        className="relative flex items-center justify-center w-72 h-72
                   mobile:-mt-10 mobile:transform mobile:scale-80"
      >
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
      <div className="desktop:ml-12 mobile:mt-6 mobile:mb-4">
        <p
          className="text-3xl font-round mb-4"
          onMouseEnter={() => {
            setEmoji("😊");
          }}
          onMouseLeave={() => {
            setEmoji("😃");
          }}
        >
          {`${ts.mecard.greeting} ${currentEmoji}`}
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
          {ts.mecard.description}
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
                      transition duration-300 ease-in transform
                      ${props.className}
                      ${
                        visible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-52"
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

          <div
            className={`flex justify-between mobile:flex-col-reverse p-8
                        ${props.paddingOverride}`}
          >
            {props.isInverted && props.img && (
              <div className="desktop:w-1/2 flex items-center justify-center">
                <img
                  src={props.img}
                  className="rounded shadow mobile:max-h-80"
                />
              </div>
            )}
            <div className="pt-8 w-full">{props.children}</div>
            {!props.isInverted && props.img && (
              <div className="desktop:w-1/2 flex items-center justify-center">
                <img
                  src={props.img}
                  className="rounded shadow mobile:max-h-80"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </IsVisible>
  );
}

function UsableImage(props) {
  return (
    <div
      className={`my-auto mx-auto rounded shadow overflow-hidden ${props.classDiv}`}
    >
      <img
        className={`w-full object-cover mobile:max-h-72 ${props.className}`}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

function TimelineComp(props) {
  return (
    <li className="mb-3">
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
  return <ul className={`desktop:p-4 ${props.className}`}>{props.children}</ul>;
}

function SkillPoint(props) {
  const Icon = props.icon;

  return (
    <div
      className={`w-20 mx-2 my-2
                  ${props.animate ? "animate-icon" : ""}`}
    >
      <div className="w-8 h-8 mx-auto">
        {typeof props.icon !== "undefined" && <Icon />}
      </div>
      <p className="font-round text-center mt-1 font-">{props.text}</p>
    </div>
  );
}

function SkillsContainer(props) {
  return (
    <div
      className="flex items-center justify-between mt-3
                 mobile:flex-col mobile:mt-5"
    >
      <h1 className="text-xl text-center desktop:w-1/4 desktop:pr-8">
        {props.title}
      </h1>
      <div
        className="flex flex-wrap justify-center items-center bg-gray-50 rounded
                   w-3/4 mt-4 mobile:mt-2 pt-3 desktop:p-2 desktop:pt-4"
      >
        {props.children}
      </div>
    </div>
  );
}

function LanguageElement(props) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="rounded-full w-5 h-5 "
          src={props.src}
          alt={props.alt}
        />
        <p className="font-round ml-2 my-1">{props.lang}</p>
      </div>
      <p className="font-round text-sm text-center text-gray-500">
        {props.text}
      </p>
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
                     bg-gray-200 flex flex-col items-center
                     mobile:pt-16 mobile:px-3"
        >
          {/* About Me Card */}
          <Card title={ts.aboutme.title}>
            <div className="flex w-full mobile:flex-col">
              <div
                className="desktop:w-3/5 desktop:mr-7 mobile:mb-4
                           flex flex-col justify-center"
              >
                <p className="font-round">
                  <strong>{ts.aboutme.t1}</strong> <br />
                </p>
                <p className="font-round mt-1">{ts.aboutme.t2}</p>
                <p className="font-round mt-1 text-justify ">{ts.aboutme.t3}</p>
              </div>
              <UsableImage classDiv="desktop:w-2/5" src={skillsImg} alt="" />
            </div>

            <div className="mt-5 flex w-full mobile:flex-col-reverse">
              <UsableImage classDiv="desktop:w-2/5" src={laptopImg} alt="" />
              <div
                className="desktop:w-3/5 desktop:ml-7 mobile:mb-4
                           flex flex-col justify-center"
              >
                <p className="font-round mt-1 text-justify ">{ts.aboutme.t4}</p>
              </div>
            </div>
          </Card>
          {/* Skills Card */}
          <Card
            title={ts.skills.title}
            isInverted={false}
            paddingOverride="mobile:px-0"
          >
            <SkillsContainer title={ts.skills.frontend}>
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
                icon={icons.IconTailwind}
              />
            </SkillsContainer>

            <SkillsContainer title={ts.skills.backend}>
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
                icon={icons.IconElectron}
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

            <SkillsContainer title={ts.skills.tooling}>
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

            <SkillsContainer title={ts.skills.other}>
              <SkillPoint
                animate={this.state.icons[13]}
                text="Figma"
                icon={icons.IconFigma}
              />
              <SkillPoint
                animate={this.state.icons[14]}
                text="Adobe Xd"
                icon={icons.IconAdobeXd}
              />
              <SkillPoint
                animate={this.state.icons[15]}
                text="Word"
                icon={icons.IconWord}
              />
              <SkillPoint
                animate={this.state.icons[16]}
                text="Excel"
                icon={icons.IconExcel}
              />
              <SkillPoint
                animate={this.state.icons[17]}
                text="PowerPoint"
                icon={icons.IconPowerPoint}
              />
              <SkillPoint
                animate={this.state.icons[18]}
                text="Outlook"
                icon={icons.IconOutlook}
              />
            </SkillsContainer>
          </Card>
          {/* Edjucation Card */}
          <Card title={ts.education.title} img={educationImg}>
            <div
              className="flex h-full -ml-3 items-center justify-evenly
                         mobile:flex-col"
            >
              <Timeline className="desktop:w-2/3">
                <TimelineComp
                  title={ts.education.tu.title}
                  time={ts.education.tu.timespan}
                >
                  {ts.education.tu.text}
                </TimelineComp>
                <TimelineComp
                  title={ts.education.htl.title}
                  time={ts.education.htl.timespan}
                >
                  {ts.education.htl.text}
                </TimelineComp>
                <TimelineComp
                  title={ts.education.nms.title}
                  time={ts.education.nms.timespan}
                ></TimelineComp>
                {/* <TimelineComp
                title="Volksschule St.Michael"
                time="2008 - 2012"
              ></TimelineComp> */}
              </Timeline>
              <div
                className="w-0.5 h-5/6 bg-gray-200 rounded-full
                mobile:w-5/6 mobile:h-0.5 mobile:mt-3 mobile:mb-5"
              ></div>
              <div className="space-y-6 w-1/3">
                <LanguageElement
                  lang={ts.education.languages.german.lang}
                  text={ts.education.languages.german.desc}
                  src={germanFlagImg}
                  alt="german flag"
                />
                <LanguageElement
                  lang={ts.education.languages.english.lang}
                  text={ts.education.languages.english.desc}
                  src={ukUsFlagImg}
                  alt="UK and US flag"
                />
              </div>
            </div>
          </Card>
          {/* Experiance Card */}
          <Card title={ts.experiance.title} img={teamImg} isInverted={false}>
            <div className="mobile:flex justify-center">
              <Timeline className="mobile:mx-auto #">
                <TimelineComp
                  title={ts.experiance.p3.title}
                  time={ts.experiance.p3.timespan}
                >
                  {ts.experiance.p3.text}
                </TimelineComp>
                <TimelineComp
                  title={ts.experiance.p2.title}
                  time={ts.experiance.p2.timespan}
                >
                  {ts.experiance.p2.text}
                </TimelineComp>
                <TimelineComp
                  title={ts.experiance.p1.title}
                  time={ts.experiance.p1.timespan}
                >
                  {ts.experiance.p1.text}
                </TimelineComp>
              </Timeline>
            </div>
          </Card>

          {/* <Card title="Projekte">
            <div className="flex flex-col lg:flex-row space-x-6">
              <div>Diplomarbeit</div>
              <div>Personal Webside</div>
              <div>Shop Website - WIP</div>
            </div>
          </Card> */}
        </div>
        <div className="angle-top-invert py-16 -mt-28 bg-white"></div>
      </div>
    );
  }
}

export default LandingPage;
