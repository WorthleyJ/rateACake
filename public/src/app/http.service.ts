import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
    this.getCakes();
  }
  getCakes(){
    // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.copy
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our cakes!", data));
    // Return the observable to wherever the getTasks method was invoked.
    return this._http.get('/tasks');
  }
  postToServer(num){
      // use the .post() method of HttpClient
      // num must be an object
      // provide the url of your post route - make sure this is set up in your server!
      return this._http.post('/tasks', num);  
  }
  addCake(newtask){
    return this._http.post('/task', newtask)
  }
  editCake(task){
    return this._http.put('/updateTask', task)
  }
  deleteCake(id){
    console.log("see this id", id);
    return this._http.delete('/delete/'+ id);
  }
  addReview(id , review){
    console.log("see this id", id, "review:", review);
    return this._http.post('/addReview/' + id, review)
  }
}
