import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LanguageGuard } from './services/language/language.guard';
import { LanguageResolver } from './services/language/language.resolver';
import { HomeComponent } from './home/home.component';
import { PageTowComponent } from './page-tow/page-tow.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ar/home',
    pathMatch: 'full'
  },
  {
    path: ':lang',
    canActivate: [LanguageGuard],
    resolve: { lang: LanguageResolver },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'page-two',
        component: PageTowComponent
      },
      // Add other routes here
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'ar/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
