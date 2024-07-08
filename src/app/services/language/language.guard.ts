import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage, supportedLanguages } from './languages.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {}

  canActivate(next: ActivatedRouteSnapshot): boolean | UrlTree {
    const lang = next.params['lang'];

    if (!lang || !supportedLanguages.includes(lang)) {
      this.translate.use(defaultLanguage);
      const urlSegments = next.url.map(segment => segment.path);
      const urlTree = this.router.createUrlTree([defaultLanguage, ...urlSegments]);
      return urlTree;
    }

    this.translate.use(lang);
    return true;
  }
}
