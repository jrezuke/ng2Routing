import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { TeamsComponent } from './teams/teams.component';
import { OrgsComponent } from './orgs/orgs.component';

const routes = [
  {
    path: '',
    children: [
      {
        path: 'teams',
        component: TeamsComponent
      },
      {
        path: 'orgs',
        component: OrgsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompaniesRoutingModule { }
