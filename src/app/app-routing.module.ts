import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  // Ajoutez vos routes ici, par exemple:
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuardService] },
  { path: 'sign-in', component: SignInComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
