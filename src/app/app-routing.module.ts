import { RouteGuardService } from './services/route-guard.service';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signin',
    component:SigninComponent,
    children:[{
      path:':id',
      component:SigninComponent
    }],
    canActivate: [RouteGuardService],
  },
  {
    path:'register',
    component:SignupComponent,
    canActivate: [RouteGuardService],
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
