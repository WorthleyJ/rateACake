import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { totalmem } from 'os';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  reviews: any;
  cake: any;
  total: any;
  avg: any

  @Input() taskToShow: any;

  constructor(private _comp : AppComponent) { 
    
  }
  
  ngOnInit() {
  //     task = this._comp.currentTask
  //     console.log("task from t.comp.ts *****:", task)
    if(this._comp.currentCake){
      this.cake = this._comp.currentCake
      console.log("cake:",this.cake)
      this.reviews = this.cake.Reviews
      console.log("reviews:", this.reviews, this.reviews.length)
      // if(this.reviews.length > 0){ 
      //   for(var i = 0; i < this.reviews.length; i++){
      //     console.log("stars:",this.reviews[i].stars)
      //       this.total = this.total + this.reviews[i].stars
      //       console.log("+++++++++++++++++++++++++++++++++++=",this.total)

      //   }
        this.avg = this.total / this.reviews.length
      }
    }

  }

  // onButtonShow(){
  //   // console.log(`Click event is working and i got the tit:`, title);

  //   // this.show2 = true;

  //   // this.currentTask = {title : title, description : description}
  //   // // this.showDescription = description
  //   cake = this._comp.currentCake
  //     console.log(" 22222task from t.comp.ts *****:", cake)

  // }
// }
