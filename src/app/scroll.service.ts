import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScrollService {
  private scrollTop: number;
  scrollChanged = new Subject<number>();

  setScroll(top: number) {
    this.scrollTop = top;
    this.scrollChanged.next(this.scrollTop);
    // console.log(this.scrollTop);
  }
  getScroll() {
    return this.scrollTop;
  }
}
