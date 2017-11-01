import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  email: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.auth.onAuthStateChanged((user) => {
      if(user){
        this.isLoggedIn = true;
        this.email = user.email;
      }else {
        this.isLoggedIn = false;
      }
    });
  }

  ngOnInit() {
    
  }

  logout(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

}
