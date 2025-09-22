import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { CommonDependencyModule } from '../common-dependency/common-dependency.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonDependencyModule
  ]
})
export class DashboardModule { }
