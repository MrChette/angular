
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanflyPipe } from './pipes/canFly.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { SortByPipe } from './pipes/sortBy.pipe';



@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,


    //Pipes
    ToggleCasePipe,
    CanflyPipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
