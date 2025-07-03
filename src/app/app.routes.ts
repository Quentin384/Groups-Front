import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { listDetails } from './pages/dashboard/listDetails/listDetails';
import { Login } from './pages/login/login.component';
import { Register } from './pages/register/register.component';
import { Home } from './pages/home/home.component';
import { Members } from './pages/members/members.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email';
import { ListComponent } from './pages/list/list.component';
import { GenerateGroupsComponent } from './pages/generate-groups/generate-groups.component';
import { error } from './pages/error/error.component';


export const routes: Routes = [
  { path: 'dashboard/admin', component: AdminDashboardComponent, data: { title: 'Admin Dashboard' } },
  { path: 'groups', component: UserDashboardComponent, data: { title: 'User Dashboard' } },
  { path: 'list/details', component: listDetails, data: { title: 'List Details' } },
  { path: 'login', component: Login, data: { title: 'Login' } },
  { path: 'register', component: Register,  data: { title: 'Register' } },
  { path: '', component: Home, data: { title: 'Home' } },
  { path: 'members', component: Members, data: { title: 'Members' } },
  { path: 'verifyemail', component: VerifyEmailComponent, data: { title: 'Verify Email' } },
  { path: 'list', component: ListComponent, data: { title: 'List' } },
  { path: 'generate-groups', component: GenerateGroupsComponent, data: { title: 'Generate Groups' } },
  { path: '**', component: error , data: { title: 'Error' } },
];
