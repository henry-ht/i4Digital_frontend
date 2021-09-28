import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { PublicationsComponent } from './publications/publications.component';



@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    AlbumsComponent,
    PublicationsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ViewRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewsModule { }
