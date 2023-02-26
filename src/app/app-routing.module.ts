import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  },

  { path: "", redirectTo: "pages/todo", pathMatch: "full" },
  { path: "**", redirectTo: "pages/todo" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
