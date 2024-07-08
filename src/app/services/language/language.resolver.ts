import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { defaultLanguage } from "./languages.enum";

@Injectable({
  providedIn: "root",
})
export class LanguageResolver implements Resolve<void> {

  constructor(private translate: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot): void {
    if (typeof document != "undefined") {
      const lang = route.params["lang"] || defaultLanguage;
      this.translate.use(lang);
    }
  }
}
