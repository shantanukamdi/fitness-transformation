import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  age: number;
  gender: string;
  height: number;
  password: string;
  uploadImage: FileList;

  constructor(private _firebaseAuthService: FirebaseAuthService, private router: Router) { }

  ngOnInit() {
  }
  detectFiles(event){
    this.uploadImage = event.target.files;
  }
  signUp(){
    let userPersonalData = {
      name: this.name,
      email: this.email,
      age: this.age,
      gender: this.gender,
      height: this.height,
      password: this.password,
      image: this.uploadImage.item(0)
    };

    this._firebaseAuthService.registerUser(userPersonalData)
                             .then(authData => {
                                this.router.navigate(['edit-details']);
                             });
  }
}
