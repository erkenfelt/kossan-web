import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { CoopComponent } from './pages/coop/coop.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InterestComponent } from './pages/interest/interest.component';

const routes: Routes = [
  {
    path: 'forskola',
    component: InfoComponent,
  },
  {
    path: 'kooperativ',
    component: CoopComponent,
  },
  {
    path: 'personal',
    component: EmployeesComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
  {
    path: 'intresseanmalan',
    component: InterestComponent,
  },
  {
    path: 'hem',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/hem',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
