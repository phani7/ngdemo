import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public swUpdate: SwUpdate) {
    let a = this.swUpdate.isEnabled;
  }
}
