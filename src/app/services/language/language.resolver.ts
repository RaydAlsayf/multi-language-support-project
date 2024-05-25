import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageResolver implements Resolve<void> {
  constructor(private translate: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot): void {
    const lang = route.params['lang'] || 'ar';
    this.translate.use(lang);
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }
  }
}
