const stringDict = {
  mecard: {
    greeting: {
      en: "Hello!",
      de: "Hallo!",
    },
    description: {
      en: "Student TU-Vienna | Front-End Developer",
      de: "Student TU-Wien | Front-End Entwickler",
    },
  },

  lang: {
    english: {
      en: "English",
      de: "Englisch",
    },
    german: {
      en: "German",
      de: "Deutsch",
    },
  },

  aboutme: {
    title: {
      en: "About Me",
      de: "Über mich",
    },
    t1: {
      en: "Hi!",
      de: "Hallo!",
    },
    t2: {
      en: "I’m Roland, I’m 19 years old and I have a lot of fun developing Software.",
      de: "Ich heiße Roland, bin 19 Jahre alt und habe Spaß an der Softwareentwicklung.",
    },
    t3: {
      en: "Right now, I’m serving my military duty, but beginning in the spring of 2022 I’m going to start my bachelor's degree in computer science. Parallel to it I already want to work to gain some valuable work experience, and of course to earn a few bucks.",
      de: "Zurzeit leiste ich meinen Wehrdienst ab und werde im Frühjahre 2022 and der TU-Wien mit meinem Bachelorstudium in Informatik beginnen. Ich will nebenbei schon als Softwareentwickler arbeiten, um bereits während des Studiums Berufserfahrungen zu sammeln und natürlich, um ein paar Euro dazuzuverdienen.",
    },
    t4: {
      en: "Personally, I’m very ambitious and got the desire to constantly improve my skillset. I prefer to do this in a practical way, because mistakes are the best way to learn. I am very shy at first, but after a short period of getting to know my colleagues, I enjoy working in teams. My previous employers have always been very impressed with my independence in doing my work.",
      de: "Persönliche bin ich sehr strebsam und habe das Verlangen mich immer weiterzubilden. Am liebsten mache ich dies Praktisch, denn aus Fehlern lernt man am besten. Ich bin zwar anfangs sehr schüchtern, jedoch fällt mir nach kurzer Eingewöhnungsphase das Arbeiten in Teams sehr leicht. Meine früheren Arbeitgeber waren immer sehr beeindruckt von meiner Selbstständigkeit beim Erledigen meiner Arbeit.",
    },
  },

  skills: {
    title: {
      en: "Skills",
      de: "Skills",
    },
    frontend: {
      en: "Frontend",
      de: "Frontend",
    },
    backend: {
      en: "Backend",
      de: "Backend",
    },
    tooling: {
      en: "Tooling",
      de: "Hilfsmittel",
    },
    other: {
      en: "Other Software",
      de: "Andere Programme",
    },
  },
};

const validLanguageTags = ["en", "de"];

function getDefaultLanguage() {
  // get the browser default language, if not defined default to English
  // See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
  const lang = navigator.language || navigator.userLanguage || "en";

  const match = lang.toLowerCase().match(/^[a-z]{2}/);
  return match[0];
}

function filterStrings(
  data,
  lang,
  notFoundDefault = "--- STRING WAS NOT DEFINED! ---"
) {
  let res = {};

  const names = Object.getOwnPropertyNames(data);
  if (names.length <= 0) return notFoundDefault;
  names.forEach((name, idx, array) => {
    // console.log(name, languageTags.includes(name));
    if (validLanguageTags.includes(name)) {
      // console.log(data, name, lang);
      if (typeof data[lang] !== "undefined") {
        res = data[lang];
      } else {
        res = notFoundDefault;
      }
    } else {
      res[name] = filterStrings(data[name], lang);
    }
  });
  return res;
}

const translator = {
  currentLang: "",
  strings: {},

  onChangeCbs: [],
  registerToOnChange: function (callback) {
    this.onChangeCbs.push(callback);
  },

  setLang: function (lang) {
    if (validLanguageTags.includes(lang) == false)
      throw new Error(
        `translator.setLang(): language Tag '${lang}' not in validLanguageTags`
      );
    this.currentLang = lang;
    this.strings = filterStrings(stringDict, lang);
    translatorStrings = this.strings;

    // Call all of the OnChange callbacks
    this.onChangeCbs.forEach((cb) => {
      cb.call({}, this.currentLang);
    });
  },
};

// shorthand
let translatorStrings = {};

console.log("default language set to:", getDefaultLanguage());

// Set the initial language
translator.setLang(getDefaultLanguage());

export { translator, translatorStrings };
