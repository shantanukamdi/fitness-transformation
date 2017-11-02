import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  weekNumber: string;
  exercise: string;
  bodyFatPercentage: number;
  waistCircumference: number;
  weight: number;
  basalMetabolicRate: number;
  weeklyImage: FileList;

  constructor() { }

  ngOnInit() {
  }

  detectFiles(event){
    this.weeklyImage = event.target.files;
  }

  saveUserPersonalData(){
    let userWeeklyData = {
      weekNumber: this.weekNumber,
      exercise: this.exercise,
      bodyFatPercentage: this.bodyFatPercentage,
      waistCircumference: this.waistCircumference,
      weight: this.weight,
      basalMetabolicRate: this.basalMetabolicRate,
      weeklyImage: this.weeklyImage.item(0)
    };
    //console.log(this.weeklyImage.item(0));
    console.log(userWeeklyData);
  }
}
