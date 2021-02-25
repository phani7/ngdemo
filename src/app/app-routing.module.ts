import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: () => import('./pages/rxjs/rxjs.module').then((x) => x.RxjsModule),
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then((x) => x.NotificationModule),
  },
  { path: '', redirectTo: 'notification', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
