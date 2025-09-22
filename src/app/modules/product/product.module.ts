import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from 'src/app/components/product/product.component';
import { CommonDependencyModule } from '../common-dependency/common-dependency.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CommonDependencyModule
  ]
})
export class ProductModule { }
