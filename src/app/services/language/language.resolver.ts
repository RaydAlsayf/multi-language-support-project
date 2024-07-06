import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageResolver implements Resolve<void> {
  
  public defaultLanguage = 'ar'; //UPDATE HERE
  public supportedLanguagesDirection: { [key: string]: string; } = { 'en': 'ltr', 'ar': 'rtl', 'fr': 'ltr' }; //UPDATE HERE 

  constructor(private translate: TranslateService) { }

  resolve(route: ActivatedRouteSnapshot): void {
    const lang = route.params['lang'] || this.defaultLanguage;
    this.translate.use(lang);
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('lang', lang);
      //set the direction of the language
      html.setAttribute('dir', this.supportedLanguagesDirection[lang]);

    }
  }
}
