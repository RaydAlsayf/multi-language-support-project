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
      const currentUrl = this.router.url.split('/');
      currentUrl[1] = lang; // Change the language part of the URL
      this.router.navigate(currentUrl);
    }
  }

  setInitialLanguage() {
    const lang = this.router.url.split('/')[1];
    if (this.supportedLanguages.includes(lang)) {
      this.translate.use(lang);
    } else {
      this.router.navigate([this.defaultLanguage, ...this.router.url.split('/').slice(2)]);
    }
  }
}
