import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import { Observable, BehaviorSubject } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(NgScrollbar) scrollable: NgScrollbar;

  largeScreen$: Observable<boolean>;

  scrollToIcon$ = new BehaviorSubject<string>('bottom');

  constructor(
    breakpointObserver: BreakpointObserver,
    private scrollService: ScrollService
  ) {
    this.largeScreen$ = breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .pipe(map((state: BreakpointState) => !state.matches));
  }

  ngAfterViewInit() {
    this.scrollable.verticalScrolled
      .pipe(
        auditTime(200),
        tap(() => {
          this.scrollService.setScroll(this.scrollable.viewport.scrollTop);
          if (this.scrollable.viewport.scrollTop > 100) {
            document.querySelector('.scroll-top').classList.add('down');
          } else {
            document.querySelector('.scroll-top').classList.remove('down');
          }
        })
      )
      .subscribe();
  }

  scrollToEdge() {
    this.scrollable.scrollTo({ top: 0 });
  }
}
