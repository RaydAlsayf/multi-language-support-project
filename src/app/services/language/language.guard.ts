import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(
    private languageService: LanguageService,
    private router: Router,
    private translate: TranslateService
  ) {}

  canActivate(next: ActivatedRouteSnapshot): boolean | UrlTree {
    const lang = next.params['lang'];

    if (!lang || !this.languageService.supportedLanguages.includes(lang)) {
      this.translate.use(this.languageService.defaultLanguage);
      const urlSegments = next.url.map(segment => segment.path);
      const urlTree = this.router.createUrlTree([this.languageService.defaultLanguage, ...urlSegments]);
      return urlTree;
    }

    this.translate.use(lang);
    return true;
  }
}
