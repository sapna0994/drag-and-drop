import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }]
  },
  {
    path: '',
    // tslint:disable-next-line: max-line-length
    children: [{ path: 'text-drag-image', loadChildren: () => import('./text-drag-image/text-drag-image.module').then(m => m.TextDragImageModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
