import React from "react";
import profileImg from "../imgs/Foto-2020-2.png";
// import profileImg from "../imgs/Foto-2020.jpg";

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
        <MeCard />
        <div className="flex flex-col lg:flex-row">
          <Card title="About Me">
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
          <Card title="Skills">
            <div className="flex">
              <div className="w-full">
                <h1 className="text-xl">Kenntnisse</h1>
                <p>
                  JavaScript, Python, CSS, HTML, SQL <br />
                  React, VueJS, Tailwind, SCSS
                </p>
                <h1 className="text-xl">Editor</h1>
                <p>Visual Studio Code, Visual Studio</p>
              </div>
              <div className="w-full">
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
            </div>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row">
          <Card title="Bildung">
            <div>
              <EduEntry
                title="HTL1 Lastenstraße - Fachgebiet Mechatronik"
                timespan="2016 - 2021"
              />
              <EduEntry title="NMS St.Michael" timespan="2012 - 2016" />
              <EduEntry title="Volksschule St.Michael" timespan="2008 - 2012" />
            </div>
          </Card>
          <Card title="Berufserfahrung">Bla Bla Bla</Card>
        </div>

        <Card title="Projekte">
          <div className="flex  flex-col lg:flex-row">
            <div>Diplomarbeit</div>
            <div>Personal Webside</div>
            <div>Shop Website - WIP</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default LandingPage;
