import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';


// Router Configuration
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'edit-details', component: EditDetailsComponent },
    { path: 'view-details', component: ViewDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);