import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from 'src/app/components/user/user.component';
import { CommonDependencyModule } from '../common-dependency/common-dependency.module';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CommonDependencyModule
  ]
})
export class UserModule { }
