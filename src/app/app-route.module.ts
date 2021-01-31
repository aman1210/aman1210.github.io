import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'about',
    component: IntroComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoute {}
