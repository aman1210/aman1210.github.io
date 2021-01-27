import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
})
export class AppBarComponent implements OnInit {
  constructor() {}

  prevScrollpos = window.pageYOffset;

  ngOnInit(): void {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('hello');
    const newPos = window.pageYOffset;
    if (this.prevScrollpos > newPos) {
      document.querySelector('.navbar').classList.remove('down');
    } else {
      document.querySelector('.navbar').classList.add('down');
    }
    this.prevScrollpos = newPos;
  }
}
