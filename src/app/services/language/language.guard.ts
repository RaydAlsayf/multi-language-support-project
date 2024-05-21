import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  constructor(private languageService: LanguageService, 
    private router: Router, 
    private translate: TranslateService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const lang = next.params['lang'];

    if (!lang || !this.languageService.supportedLanguages.includes(lang)) {
      this.translate.use(this.languageService.defaultLanguage);
      const urlTree = this.router.createUrlTree([this.languageService.defaultLanguage, ...state.url.split('/').slice(2)]);
      return urlTree;
    }

    this.translate.use(lang);
    return true;
  }
}
