import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@app/services';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    Notification.requestPermission();
  }

  notify(sw?: boolean) {
    if (sw) {
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg) {
          reg.showNotification('Notification', { body: 'persistent notification' });
        } else {
          console.log('service worker not registered!!')
        }
      })
    } else {
      let notify = new Notification('Notification', { body: 'simple notification' });
    }
  }

}
