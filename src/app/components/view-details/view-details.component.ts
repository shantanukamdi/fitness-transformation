import { Component, OnInit } from '@angular/core';
import { FirebaseDatabaseService } from '../../services/firebase-database.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private _firebaseDatabaseService: FirebaseDatabaseService) { 
    this._firebaseDatabaseService.getWeeklyData();
  }

  ngOnInit() {
  }

}
