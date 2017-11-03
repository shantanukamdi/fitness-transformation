import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  
  constructor(private _firebaseAuthService: FirebaseAuthService,
              private router: Router
             ) { }

  ngOnInit() {
  }

  login(){
    let user = {
      email: this.email,
      password: this.password
    }
    this._firebaseAuthService.loginWithEmailAndPassword(user).then(data => {
      console.log(data);
      this.router.navigate(['view-details']);
    });
    console.log('Username: ',this.email);
    console.log('Password: ',this.password);
  }

  goToSignup(){
    this.router.navigate(['sign-up']);
  }
}
