import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage } from './languages.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router, private translate: TranslateService) {}

  navigate(commands: any[], extras?: NavigationExtras) {
    const lang = this.translate.currentLang || defaultLanguage;
    const updatedCommands = [lang, ...commands];
    return this.router.navigate(updatedCommands, extras);
  }

  navigateByUrl(url: string, extras?: NavigationExtras) {
    const lang = this.translate.currentLang || defaultLanguage;
    const urlSegments = url.split('/');
    if (urlSegments[1] !== lang) {
      urlSegments.splice(1, 0, lang);
    }
    const updatedUrl = urlSegments.join('/');
    return this.router.navigateByUrl(updatedUrl, extras);
  }
}
