import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseDatabaseService {

  constructor(private af: AngularFireDatabase) { }
  
  storeWeeklyData( userWeeklyData ){
    console.log('Weekly data in Firebase Service is ');
    console.log(userWeeklyData);
    let weekNumber = userWeeklyData.weekNumber;
    let userid = firebase.auth().currentUser;
   firebase.database().ref('/userPersonalData')
                       .child(userid.uid+'/weeks')
                       .push({
                        [weekNumber]: userWeeklyData
                       });
    //let value = this.af.list('userPersonalData/'+userid.uid+'/weeks').setValue(userWeeklyData);

    let storagePath = 'images/'+userid.uid+'/'+userWeeklyData.weeklyImage.name
    firebase.storage()
            .ref(storagePath).put(userWeeklyData.weeklyImage);
  }

  getWeeklyData() {
    let userid = firebase.auth().currentUser;
    let db = firebase.database();
    db.ref('/userPersonalData/'+userid.uid)
      .once('value')
      .then((snapshot) => {
        console.log('Snapshot is');
        console.log(snapshot.val());
      });
  }
}