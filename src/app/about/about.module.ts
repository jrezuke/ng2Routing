import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { About2Component } from './about-2.component';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, About2Component],
  providers:[]
})

export class AboutModule { }
