import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './utils/auth-check.guard';
import { RestrictAccessGuard } from './utils/restrict-access.guard';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PensionerDetailComponent } from './components/pensioner-detail/pensioner-detail.component';
import { PensionerListComponent } from './components/pensioner-list/pensioner-list.component';
import { PensionDetailsComponent } from './components/pension-details/pension-details.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent, canActivate: [RestrictAccessGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path:'pensioner-details',component:PensionerDetailComponent,pathMatch:'full',canActivate:[AuthGuardService]
  },
  {
    path:'pensioner-list',component:PensionerListComponent,pathMatch:'full',canActivate:[AuthGuardService]
  },
  {
    path:'pension-details',component:PensionDetailsComponent,pathMatch:'full',canActivate:[AuthGuardService]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AppRoutingModule { }
