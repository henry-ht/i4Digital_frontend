import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    AppLayoutComponent
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    AppLayoutComponent,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
