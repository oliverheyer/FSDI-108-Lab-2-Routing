import { HomeComponent } from './home/home.component';
import { TempCalculatorComponent } from './temp-calculator/temp-calculator.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserResgisterComponent } from './user-resgister/user-resgister.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'converter', component: TempCalculatorComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'user/new', component: UserResgisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 