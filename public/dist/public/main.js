(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n    border: 5px orange solid;\n    border-radius: 5px;\n\n}\n.main{\n    border: 5px blue solid;\n    border-radius: 5px;\n    margin: 10px;\n}\n.foot{\n    border: 5px green solid;\n    border-radius: 5px;\n    margin: 10px;\n}\n.foot2{\n    border: 5px red solid;\n    border-radius: 5px;\n    margin: 10px;\n}\n.B1{\n    color: white;\n    background-color: purple;\n    font-size: 30px;\n    border-radius: 5px;\n    margin: 10px;\n}\n.B2{\n    color: white;\n    background-color: teal;\n    font-size: 30px;\n    border-radius: 75px;\n    margin: 10px;\n    height: 85px;\n    margin-left: 100px;\n}\n.left{\n    width: 200px;\n    display: inline-block;\n}\n.right{\n    width: 600px;\n    display: inline-block;\n    background-color: tan;\n    vertical-align: top;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1COztDQUV0QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcbiAgICBib3JkZXI6IDVweCBvcmFuZ2Ugc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG4ubWFpbntcbiAgICBib3JkZXI6IDVweCBibHVlIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uZm9vdHtcbiAgICBib3JkZXI6IDVweCBncmVlbiBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmZvb3Qye1xuICAgIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLkIxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG4uQjJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogODVweDtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG4ubGVmdHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnJpZ2h0e1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGFuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"head\" style=\"text-align:center\">\n  <h1>\n    {{ header }}\n  </h1>\n  <app-task *ngIf='selectedTask' [taskToShow]='selectedTask'></app-task>\n  <div class=\"left\">\n    <h2>Submit a cake to be rated</h2>\n    <hr>\n    <form (submit)=\"onSubmit()\">\n      <p>{{ newTask | json }}</p>\n      <input type=\"text\" placeholder=\"name\" name=\"newCake.name\" [(ngModel)]=\"newCake.name\">\n      <input type=\"text\" placeholder=\"img url\" name=\"newCake.url\" [(ngModel)]=\"newCake.url\">\n      <input type=\"submit\" value=\"Create Cake\">\n    </form>\n  </div>\n  <!-- <div class=\"main\"> -->\n    <!-- <button class=\"B1\" (click)=\"onButtonClick()\">GET ALL TASKS</button> -->\n    <div *ngFor=\"let cake of cakes; let i = index\" class=\"right\">\n        <!-- <p >{{ cake.name }} <span><button (click)=\"cakeToShow(cake)\">Show</button><button (click)=\"onButtonClickParams(cake._id, cake.name, cake.url)\">Edit</button><button (click)=\"onButtonClickDelete(cake._id)\">Delete</button></span> </p> -->\n        <img (click)=\"cakeToShow(cake)\" src=\"{{ cakes[i].url }}\" alt=\"img\">\n        <form (submit)=\"onSubmitReview(cakes[i]._id)\">\n          <select name=\"newReview.stars\" [(ngModel)]=\"newReview.stars\">\n            <option value=\"5\">5 stars</option>\n            <option value=\"4\">4 stars</option>\n            <option value=\"3\">3 stars</option>\n            <option value=\"2\">2 stars</option>\n            <option value=\"1\">1 stars</option>\n          </select>\n\n          <input type=\"text\" placeholder=\"comment\" name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\">\n          <input type=\"submit\">\n        </form>\n    </div>\n    <app-task *ngIf=\"show2\"></app-task>\n\n    \n  <!-- </div> -->\n\n  <!-- <div class=\"foot2\" *ngIf=\"show2\">\n    <p>{{currentTask.title}}</p>\n    <p>{{currentTask.description}}</p>\n  </div> -->\n  <div class=\"foot\" *ngIf=\"show\">\n    <form (submit)=\"onSubmitEdit()\">\n      <p>{{ newTask | json }}</p>\n      <input type=\"text\"  name=\"task.title\" [(ngModel)]=\"currentTask.title\" >\n      <input type=\"text\"  name=\"task.description\" [(ngModel)]=\"currentTask.description\" >\n      <input type=\"submit\" value=\"Edit Task\">\n    </form>\n    <!-- <p>{{ showTitle }}</p>\n    <p>{{ showDescription }}</p> -->\n  </div>\n  <!-- <button (click)=\"do(event)\">click</button> -->\n  <!-- <button (click)=\"onButtonClick()\" >Click me!</button> -->\n<!-- <button (click)=\"onButtonClickParam(5)\">Click me!</button> -->\n<!-- <button (click)=\"onButtonClickParams(5, 'hello')\">Click me!</button> -->\n<!-- <button (click)=\"onButtonClickEvent($event)\">Click me!</button> -->\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.cakes = [];
        this.showAll = false;
        this.show = false;
        this.show2 = false;
        this.header = 'Rate my cakes';
    }
    // ngOnInit will run when the component is initialized, after the constructor method.
    AppComponent.prototype.ngOnInit = function () {
        this.getCakesFromService();
        this.newCake = { name: "", url: "" };
        this.newReview = { stars: "", comment: "" };
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cakes.push(this.newCake);
        var observable = this._httpService.addCake(this.newCake);
        observable.subscribe(function (data) {
            console.log("Got the data from post back", data);
            _this.newCake = { name: "", url: "" };
        });
        // Code to send off the form data (this.newTask) to the Service
        // ...
        // Reset this.newTask to a new, clean object.
    };
    AppComponent.prototype.onSubmitEdit = function () {
        var _this = this;
        // this.tasks
        var observable = this._httpService.editCake(this.currentCake);
        observable.subscribe(function (data) {
            console.log("Got the data from post back", data);
            _this.currentCake = { name: "", url: "" };
        });
        // Code to send off the form data (this.newTask) to the Service
        // ...
        // Reset this.newTask to a new, clean object.
    };
    // getTasksFromService(){
    //   this._httpService.getTasks();
    // }
    AppComponent.prototype.getCakesFromService = function () {
        var _this = this;
        var observable = this._httpService.getCakes();
        observable.subscribe(function (data) {
            console.log("Got our tasks 4444!", data);
            // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
            // This may be different for you, depending on how you set up your Task API.
            _this.cakes = data['data'];
            var cakes = _this.cakes;
            console.log("cakes BIIIICh:", cakes);
        });
    };
    AppComponent.prototype.onButtonClick = function () {
        console.log("clicked fuck");
        if (this.showAll) {
            this.showAll = false;
        }
        else {
            this.showAll = true;
        }
    };
    AppComponent.prototype.cakeToShow = function (cake) {
        console.log("Click event is working and i got the cake:", cake);
        this.show2 = true;
        this.currentCake = cake;
        this.currentID = cake.id;
        // this.currentTask = {title : title, description : description}
        // this.showDescription = description
    };
    AppComponent.prototype.onButtonClickParams = function (id, title, description) {
        console.log("Click event is working and i got the tit: " + title);
        console.log("the id for task is: ", id);
        this.show = true;
        this.currentCake = { title: title, description: description, id: id };
        // this.showDescription = description
    };
    AppComponent.prototype.onButtonClickDelete = function (id) {
        var _this = this;
        console.log("the id for cake is: ", id);
        var observable = this._httpService.deleteCake(id);
        observable.subscribe(function (data) {
            console.log("Got the data from post back", data);
            _this.currentCake = { title: "", description: "" };
        });
        this.getCakesFromService();
    };
    AppComponent.prototype.onSubmitReview = function (id) {
        this.currentID = id;
        // this.newReview = review
        console.log("review:", this.newReview);
        // this.resturants.push(this.newResturant)
        // console.log(this.resturants)
        var observable = this._httpService.addReview(this.currentID, this.newReview);
        // console.log("got here ***************")
        observable.subscribe(function (data) {
            console.log("Got the data from post back", data);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        // Implement OnInit.
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");






// import { importType } from '@angular/compiler/src/output/output_ast';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.getCakes();
    }
    HttpService.prototype.getCakes = function () {
        // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.copy
        var tempObservable = this._http.get('/tasks');
        tempObservable.subscribe(function (data) { return console.log("Got our cakes!", data); });
        // Return the observable to wherever the getTasks method was invoked.
        return this._http.get('/tasks');
    };
    HttpService.prototype.postToServer = function (num) {
        // use the .post() method of HttpClient
        // num must be an object
        // provide the url of your post route - make sure this is set up in your server!
        return this._http.post('/tasks', num);
    };
    HttpService.prototype.addCake = function (newtask) {
        return this._http.post('/task', newtask);
    };
    HttpService.prototype.editCake = function (task) {
        return this._http.put('/updateTask', task);
    };
    HttpService.prototype.deleteCake = function (id) {
        console.log("see this id", id);
        return this._http.delete('/delete/' + id);
    };
    HttpService.prototype.addReview = function (id, review) {
        console.log("see this id", id, "review:", review);
        return this._http.post('/addReview/' + id, review);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"foot2\" *ngIf=\"show2\"> -->\n  \n\n<!-- </div> -->\nhello\n\n    <!-- <h6>{{ cake | json }}</h6> -->\n    <!-- <p>{{cakeToShow}}</p> -->\n\n<h3>Baked by {{ cake.name }}</h3>\n<img src=\"{{ cake.url }}\" alt=\"img\">\n<p>Average rating:</p>\n\n<hr>\n<div *ngFor=\"let review of reviews\">\n    <p>{{ review.comment }}</p>\n    <p>{{ review.stars }} stars</p>\n    <hr>\n    \n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");



var TaskComponent = /** @class */ (function () {
    function TaskComponent(_comp) {
        this._comp = _comp;
    }
    TaskComponent.prototype.ngOnInit = function () {
        //     task = this._comp.currentTask
        //     console.log("task from t.comp.ts *****:", task)
        if (this._comp.currentCake) {
            this.cake = this._comp.currentCake;
            console.log("cake:", this.cake);
            this.reviews = this.cake.Reviews;
            console.log("reviews:", this.reviews, this.reviews.length);
            // if(this.reviews.length > 0){ 
            //   for(var i = 0; i < this.reviews.length; i++){
            //     console.log("stars:",this.reviews[i].stars)
            //       this.total = this.total + this.reviews[i].stars
            //       console.log("+++++++++++++++++++++++++++++++++++=",this.total)
            //   }
            this.avg = this.total / this.reviews.length;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskComponent.prototype, "taskToShow", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], TaskComponent);
    return TaskComponent;
}());

// onButtonShow(){
//   // console.log(`Click event is working and i got the tit:`, title);
//   // this.show2 = true;
//   // this.currentTask = {title : title, description : description}
//   // // this.showDescription = description
//   cake = this._comp.currentCake
//     console.log(" 22222task from t.comp.ts *****:", cake)
// }
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackworthley/Documents/Mean_stack/ratecakesdeployed/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map