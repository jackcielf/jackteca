import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full',
  },
  {
    path: 'create-thought',
    component: CreateThoughtsComponent,
  },
  {
    path: 'list-thought',
    component: ListThoughtsComponent,
  },
  {
    path: 'delete-thought/:id',
    component: DeleteThoughtComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
