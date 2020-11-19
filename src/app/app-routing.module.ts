import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'notification', loadChildren: () => import('./pages/notification/notification.module').then(x => x.NotificationModule) },
  { path: '', redirectTo: 'notification', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
