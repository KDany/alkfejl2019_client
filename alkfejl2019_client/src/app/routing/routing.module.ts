import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CookbookListComponent } from "../cookbook-list/cookbook-list.component";
import { CookbookFormComponent } from '../cookbook-form/cookbook-form.component';
import { CookbookDetailComponent } from '../cookbook-detail/cookbook-detail.component';
import { AuthGuard } from '../auth.guard';
import { LoginFormComponent } from '../login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cookbook',
    pathMatch: 'full'
  },
  {
    path: 'cookbook',
    component: CookbookListComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'cookbook/add',
    component: CookbookFormComponent
  },
  {
    path: 'cookbook/:id',
    component: CookbookDetailComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }