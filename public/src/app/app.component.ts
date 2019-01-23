import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { $ } from 'protractor';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
    newCake: any;
    cake: any;

    cakes = [];
    showAll : boolean = false;
    show : boolean = false;
    show2 : boolean = false;
    newReview: any;
    currentID: any;

    currentCake;
    showDescription: string;
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      this.getCakesFromService();
      this.newCake = { name: "", url: "" }
      this.newReview = {stars: "", comment: ""}

    }
    onSubmit(){
      this.cakes.push(this.newCake)
      let observable = this._httpService.addCake(this.newCake);
      observable.subscribe(data => {
        console.log("Got the data from post back", data);
        this.newCake = { name: "", url: "" }
      })
      // Code to send off the form data (this.newTask) to the Service
      // ...
      // Reset this.newTask to a new, clean object.
    }
    onSubmitEdit(){
      // this.tasks
      let observable = this._httpService.editCake(this.currentCake);
      observable.subscribe(data => {
        console.log("Got the data from post back", data);
        this.currentCake = { name: "", url: "" }
      })
      // Code to send off the form data (this.newTask) to the Service
      // ...
      // Reset this.newTask to a new, clean object.
    }
    // getTasksFromService(){
    //   this._httpService.getTasks();
    // }
    getCakesFromService(){
      let observable = this._httpService.getCakes();
      observable.subscribe(data => {
          console.log("Got our tasks 4444!", data)
          // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
          // This may be different for you, depending on how you set up your Task API.
          this.cakes = data['data'];
          var cakes = this.cakes;
          console.log("cakes BIIIICh:", cakes)
       });
      }
    header = 'Rate my cakes'
    onButtonClick() { 
      console.log("clicked fuck")
      if (this.showAll) {
        this.showAll = false;
      } else {
        this.showAll = true
      }
  }
  cakeToShow(cake: any){
    console.log(`Click event is working and i got the cake:`, cake);

    this.show2 = true;
    
    this.currentCake = cake
    this.currentID = cake.id
    // this.currentTask = {title : title, description : description}
    // this.showDescription = description
  }
  onButtonClickParams(id : string, title: string, description: string){ 
      console.log(`Click event is working and i got the tit: ${title}`);
      console.log("the id for task is: ", id);
      this.show = true;

      this.currentCake= {title : title, description : description, id : id}
      // this.showDescription = description
  }
  onButtonClickDelete(id: string){
    console.log("the id for cake is: ", id);

    let observable = this._httpService.deleteCake(id);
      observable.subscribe(data => {
        console.log("Got the data from post back", data);
        this.currentCake = { title: "", description: "" }
      })
      this.getCakesFromService();
  }
  onSubmitReview(id){
    this.currentID = id
    // this.newReview = review
    console.log("review:",this.newReview)

    // this.resturants.push(this.newResturant)
    // console.log(this.resturants)
    let observable = this._httpService.addReview(this.currentID, this.newReview);
    // console.log("got here ***************")
    observable.subscribe(data => {
      console.log("Got the data from post back", data);

    })
  }
  // onButtonClickParams(num: Number, str: String): void { 
  //     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any): void { 
  //     console.log(`Click event is working with event: ${event}`);
  // }
  
}

