import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = '/home';

const routes: Routes = [
  {
    path: '',
    redirectTo: MAIN,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./views/views.module').then(i => i.ViewsModule),
  },
  {
    path: '**',
    redirectTo: MAIN,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
