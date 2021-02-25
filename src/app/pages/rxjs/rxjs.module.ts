import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RouterModule, Routes } from '@angular/router';
import { TransformationComponent } from './transformation/transformation.component';

const routes: Routes = [
  { path: '', component: RxjsComponent, children: [{ path: 'transformation', component: TransformationComponent }] },
];

@NgModule({
  declarations: [RxjsComponent, TransformationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RxjsModule {}
