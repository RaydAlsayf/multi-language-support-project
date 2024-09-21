import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language/language.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
  ) { }

  ngOnInit() {
    // (TODO) delete these lines, it's just for testing
    this.languageService.direction$.subscribe(dir => {
      console.log('the current language is: ', this.languageService.getCurrentLanguage().toUpperCase(), ' and the direction is: ', dir);
    });

  }

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
