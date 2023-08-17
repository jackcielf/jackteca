import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full'
  }, 
  {
    path: 'create-thought',
    component: CreateThoughtsComponent
  }, 
  {
    path: 'list-thought',
    component: ListThoughtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
