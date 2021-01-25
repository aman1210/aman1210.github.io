import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [AppComponent, ParallaxDirective, IntroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
