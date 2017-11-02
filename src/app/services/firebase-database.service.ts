import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class FirebaseDatabaseService {

  constructor() { }

  storeUserPersonalData( userPersonalData ){
    console.log('UserPersonalData: ');
    console.log(userPersonalData);
    let userid = firebase.auth().currentUser;
    firebase.database().ref('/userData')
                       .child(userid.uid)
                       .set({
                          userid: userPersonalData
                       });
  }
  storeWeeklyData( userWeeklyData ){

  }
}