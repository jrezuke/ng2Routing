import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";

import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
const routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', loadChildren: "app/about/about.module#AboutModule" }
  //{ path: 'about', loadChildren: 'app/about/about.module' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { };
