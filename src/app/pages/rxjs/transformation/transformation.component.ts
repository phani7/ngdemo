import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, delay, exhaustMap, mergeMap, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss'],
})
export class TransformationComponent implements OnInit {
  obs1 = new Observable((obs) => {
    let count = 0;
    let intervalVar = setInterval(() => {
      obs.next(++count);
      if (count >= 5) {
        clearInterval(intervalVar);
        obs.complete();
      }
    }, 1000);
  });
  obs2 = of([10, 20]);
  sub1 = function (x): BehaviorSubject<number> {
    return new BehaviorSubject(x * 2);
  };
  sub2 = function (c) {
    return of(c * 10).pipe(delay(2000));
  };
  constructor() {}

  ngOnInit(): void {
    // this.obs1.pipe(take(10)).subscribe((x) => this.addText(x));
  }

  onExhaust() {
    this.obs1.pipe(exhaustMap((x) => this.sub2(x))).subscribe((x) => console.log(x));
  }

  onSwitch() {
    this.obs1.pipe(switchMap((x) => this.sub2(x))).subscribe((x) => console.log(x));
  }

  onConcat() {
    this.obs1.pipe(concatMap((x) => this.sub2(x))).subscribe((x) => console.log(x));
  }

  onMerge() {
    this.obs1.pipe(mergeMap((x) => this.sub2(x))).subscribe((x) => console.log(x));
  }

  addText(msg) {
    let div1 = document.querySelector('#div1');
    let span1 = document.createElement('span');
    span1.textContent = msg;
    div1.appendChild(span1);
  }
}
