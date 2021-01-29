import { HostListener } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-PortFolio';
  ratio: number;
  prevScrollpos = window.pageYOffset;

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const newPos = window.pageYOffset;
    if (newPos < 100) {
      document.querySelector('.scroll-top').classList.remove('down');
    } else {
      document.querySelector('.scroll-top').classList.add('down');
    }
    this.prevScrollpos = newPos;
  }

  top() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
