import { NgModule } from '@angular/core';
import { CompaniesRoutingModule } from './companies-routing.module';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { TeamsComponent } from './teams/teams.component';
import { OrgsComponent } from './orgs/orgs.component';

@NgModule({
  imports: [
    CommonModule, CompaniesRoutingModule
  ],
  declarations: [CompaniesComponent, TeamsComponent,OrgsComponent]
})
export class CompaniesModule { }
