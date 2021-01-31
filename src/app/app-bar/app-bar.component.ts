import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css'],
})
export class AppBarComponent implements OnInit {
  toggleView: boolean = false;
  constructor(private scrollService: ScrollService) {}

  prevScrollpos = window.pageYOffset;

  ngOnInit() {
    this.prevScrollpos = this.scrollService.getScroll();
    this.scrollService.scrollChanged.subscribe((value) => {
      if (value > 100) {
        document.querySelector('.navbar').classList.add('down');
      } else {
        document.querySelector('.navbar').classList.remove('down');
      }
    });
  }

  toggle() {
    this.toggleView = !this.toggleView;
    if (this.toggleView) {
      document.getElementById('navOptions').style.width = '100%';
    } else {
      document.getElementById('navOptions').style.width = '0px';
    }
  }

  open(link: string) {
    this.toggleView = false;
    document.getElementById('navOptions').style.width = '0px';
    document.querySelector('svg').classList.remove('active');
    document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
  }
}
