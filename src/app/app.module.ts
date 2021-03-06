import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './services/firebase-auth.service';
import { FirebaseDatabaseService } from './services/firebase-database.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';

import { routing } from './app.routes';
import { RouterModule } from '@angular/router';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    EditDetailsComponent,
    SignupComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    routing,
    RouterModule
  ],
  providers: [ AngularFireAuth, FirebaseAuthService, FirebaseDatabaseService, AngularFireDatabase ],
  bootstrap: [AppComponent]
})
export class AppModule { }
