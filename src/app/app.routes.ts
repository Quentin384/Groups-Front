import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { GroupesComponent } from './pages/groupes/groupes.component';
import { listDetails } from './pages/dashboard/listDetails/listDetails';
import { Login } from './pages/login/login.component';
import { Register } from './pages/register/register.component';
import { Home } from './pages/home/home.component';
import { Members } from './pages/members/members.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email';
import { ListComponent } from './pages/list/list.component';


export const routes: Routes = [
  { path: 'dashboard/admin', component: AdminDashboardComponent },
  { path: 'groupes', component: GroupesComponent },
  { path: 'list/details', component: listDetails },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '', component: Home },
  { path: 'members', component: Members },
  { path: 'verifyemail', component: VerifyEmailComponent },
  { path: 'list', component: ListComponent },
];
