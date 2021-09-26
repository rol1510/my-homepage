const stringDict = {
  mecard: {
    greeting: { en: "Hello!", de: "Hallo!" },
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
