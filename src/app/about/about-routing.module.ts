import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { About2Component } from './about-2.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: '2', component: About2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
