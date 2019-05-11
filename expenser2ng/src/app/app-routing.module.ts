import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'dashboard', component : DashboardComponent }
 ];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
