import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public supportedLanguages = ['en', 'ar'];
  public defaultLanguage = 'ar';

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

  // this method is used to toggle between Arabic and English but can be modified to support more languages
  toggleLanguage() {
    const currentLang = this.translate.currentLang || this.defaultLanguage;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
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
