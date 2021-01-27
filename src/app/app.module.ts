import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfiniteTypeDeleteModule } from 'ngx-sbz-type-delete';
import { ParallaxDirective } from './parallax.directive';
import { IntroComponent } from './intro/intro.component';
import { AppBarComponent } from './app-bar/app-bar.component';

@NgModule({
  declarations: [AppComponent, ParallaxDirective, IntroComponent, AppBarComponent],
  imports: [BrowserModule, InfiniteTypeDeleteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
