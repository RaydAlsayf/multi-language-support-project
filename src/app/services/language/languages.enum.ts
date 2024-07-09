/*
* The languages enum
* This file contains the default language, supported languages, and the default language direction
*/

export const defaultLanguage: string = "ar";
export const defaultLanguageDirection: string = "rtl";
export const supportedLanguages: string[] = ["ar", "en", "fr"];
export const supportedLanguagesDirection : { [key: string]: string } = {
    en: "ltr",
    ar: "rtl",
    fr: "ltr",
};

/**
 * if you need to add a new language, 
 * 1. add the language code to the supportedLanguages array.
 * 2. you need to create a new translation file in src/assets/i18n/ (e.g., newLang.json).
 * 3. Update your components to include translations for the new language.
 */