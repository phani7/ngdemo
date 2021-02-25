import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, scan, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor() {}

  ngOnInit(): void {
    // // subscribing to an event
    // let eventSub1 = fromEvent(document, 'click').subscribe(() => console.log('click event!!'));
    // // purity
    // let eventSub2 = fromEvent(document, 'click')
    //   .pipe(scan((count) => count + 1, 0))
    //   .subscribe((count) => console.log(`clicked ${count} times`));
    // // flow control - one click per second
    // let eventSub3 = fromEvent(document, 'click')
    //   .pipe(
    //     throttleTime(1000),
    //     scan((count) => count + 1, 0)
    //   )
    //   .subscribe((count) => console.log(`clicked ${count} times`));
    // let eventSub4 = fromEvent(document, 'click')
    //   .pipe(
    //     debounceTime(1000),
    //     scan((count) => count + 1, 0)
    //   )
    //   .subscribe((count) => console.log(`clicked ${count} times`));
    // this.subscription.add(eventSub1);
    // this.subscription.add(eventSub2);
    // this.subscription.add(eventSub3);
    // this.subscription.add(eventSub4);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
