import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { defaultLanguage, supportedLanguagesDirection, supportedLanguages, defaultLanguageDirection } from './languages.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private directionSubject = new BehaviorSubject<string>(supportedLanguagesDirection[defaultLanguage]);
  public direction$ : Observable<string>  = this.directionSubject.asObservable();

  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(supportedLanguages);
    translate.setDefaultLang(defaultLanguage);
    this.translate.onLangChange.subscribe(() => {
      this.updateDirection();
    });
  }

  getCurrentLanguage() {
    return this.translate.currentLang || this.translate.defaultLang;
  }

  changeLanguage(lang: string) {
    if (supportedLanguages.includes(lang)) {
      this.translate.use(lang);
      const currentUrl = window.location.pathname.split('/');
      currentUrl[1] = lang; // Change the language part of the URL
      this.router.navigateByUrl(currentUrl.join('/'));
    }
  }

  // This function will toggle between the supported languages
  toggleLanguage() {
    const currentLang = this.translate.currentLang || defaultLanguage;
    // this will toggle between to next language based on the supported languages array and if the current language is not found it will default to the first language in the array
    const newLang = supportedLanguages[(supportedLanguages.indexOf(currentLang) + 1) % supportedLanguages.length];
    this.changeLanguage(newLang);
  }

  setInitialLanguage() {
    const lang = window.location.pathname.split('/')[1];
    if (supportedLanguages.includes(lang)) {
      this.translate.use(lang);
    } else {
      this.router.navigate([defaultLanguage, ...window.location.pathname.split('/').slice(1)]);
    }
  }

  private updateDirection() {
    const lang = this.translate.currentLang;
    const direction = supportedLanguagesDirection[lang] || defaultLanguageDirection;
    this.directionSubject.next(direction);
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("lang", lang);
      //set the direction of the language
      html.setAttribute("dir", direction);
      html.classList.remove('ltr', 'rtl');
      html.classList.add(direction);
    };
  }
}
