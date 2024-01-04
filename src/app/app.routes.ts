import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Pages/Register/register/register.component';
import { LoginComponent } from './Pages/Login/login/login.component';


export const routes: Routes = [
{path:'', component:HomeComponent},
{path:'user/Register', component:RegisterComponent},
{path:'user/Login', component:LoginComponent}




];
