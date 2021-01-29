import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteTypeDeleteModule } from 'ngx-sbz-type-delete';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { ParallaxDirective } from './parallax.directive';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    IntroComponent,
    AppBarComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  imports: [BrowserModule, InfiniteTypeDeleteModule, NgScrollbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
