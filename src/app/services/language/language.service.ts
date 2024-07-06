import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  public supportedLanguages = ['en', 'ar', 'fr']; //UPDATE HERE
  public defaultLanguage = 'ar'; //UPDATE HERE

  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(this.supportedLanguages);
    translate.setDefaultLang(this.defaultLanguage);
  }

  changeLanguage(lang: string) {
    if (this.supportedLanguages.includes(lang)) {
      this.translate.use(lang);
      const currentUrl = window.location.pathname.split('/');
      currentUrl[1] = lang; // Change the language part of the URL
      this.router.navigateByUrl(currentUrl.join('/'));
    }
  }

  // This function will toggle between the supported languages
  toggleLanguage() {
    const currentLang = this.translate.currentLang || this.defaultLanguage;
    // this will toggle between to next language based on the supported languages array and if the current language is not found it will default to the first language in the array
    const newLang = this.supportedLanguages[(this.supportedLanguages.indexOf(currentLang) + 1) % this.supportedLanguages.length];
    this.changeLanguage(newLang);
  }

  

  setInitialLanguage() {
    const lang = window.location.pathname.split('/')[1];
    if (this.supportedLanguages.includes(lang)) {
      this.translate.use(lang);
    } else {
      this.router.navigate([this.defaultLanguage, ...window.location.pathname.split('/').slice(1)]);
    }
  }
}
