import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuthService {

  constructor(private afAuth: AngularFireAuth) { }

  registerUser(userPersonalData){
    let email = userPersonalData.email;
    let password = userPersonalData.password;

    console.log(userPersonalData.image);
    return this.afAuth
               .auth.createUserWithEmailAndPassword(email, password)
               .then(newUser => {
                  let newUserId = newUser.uid;
                  firebase.database()
                          .ref('userPersonalData')
                          .child(newUserId)
                          .set({
                            newUserId: userPersonalData
                          });
                  let storagePath = 'images/'+newUserId+'/'+userPersonalData.image.name
                  firebase.storage()
                          .ref(storagePath).put(userPersonalData.image);
                }).catch((error) => {
                  console.log(error);
                });
  }

  loginWithEmailAndPassword(user){
    let email = user.email;
    let password = user.password;
    console.log("Auth Service");
    console.log(user);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
