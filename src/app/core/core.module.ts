import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './pipes/date.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    DatePipe,
    SearchPipe,
    ImgFallbackDirective
  ],
  exports: [
    DatePipe,
    SearchPipe,
    ImgFallbackDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [

  ]
})
export class CoreModule { }
