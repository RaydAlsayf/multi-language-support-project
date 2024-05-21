import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LanguageGuard } from './services/language/language.guard';
import { LanguageResolver } from './services/language/language.resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LanguageGuard],
    resolve: { lang: LanguageResolver },
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      // Add other routes here
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'ar/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'ar/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
