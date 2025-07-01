import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardDetailAdminComponent } from './pages/dashboard/admin-dashboard-detail-admin/admin-dashboard-detail-admin';
import { Login } from './pages/login/login.component';
import { Register } from './pages/register/register.component';
import { Home } from './pages/home/home.component';
import { Members } from './pages/members/members.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email';
import { ListComponent } from './pages/list/list.component';


export const routes: Routes = [
  { path: 'dashboard/admin', component: AdminDashboardComponent },
  { path: 'dashboard/user', component: UserDashboardComponent },
  { path: 'dashboard/admin/admindetail', component: AdminDashboardDetailAdminComponent },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: '', component: Home },
  { path: 'members', component: Members },
  { path: 'verifyemail', component: VerifyEmailComponent },
  { path: 'list', component: ListComponent },
];
