import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './pipes/date.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    DatePipe,
    OrderByPipe,
    SearchPipe,
  ],
  exports: [
    DatePipe,
    OrderByPipe,
    SearchPipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [

  ]
})
export class CoreModule { }
