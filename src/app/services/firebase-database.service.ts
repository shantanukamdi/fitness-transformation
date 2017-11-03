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
    console.log('Weekly data in Firebase Service is ');
    console.log(userWeeklyData);
    let weekNumber = userWeeklyData.weekNumber;
    let userid = firebase.auth().currentUser;
    firebase.database().ref('/userPersonalData')
                       .child(userid.uid)
                       .update({
                        [weekNumber]: userWeeklyData
                       });
  }
}