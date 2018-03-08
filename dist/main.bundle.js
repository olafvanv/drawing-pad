webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".color-pickers, .pen-selector{\n  width:100%;\n  text-align:center;\n  padding:10px 0;\n}\n\n.color-pickers .color{\n  width:50px;\n  height:50px;\n  border:1px solid #bcbcbc;\n  margin:0 5px;\n\n}\n\n.color:hover{\n  cursor:pointer;\n}\n\n.color:active{\n  -webkit-box-shadow:inset 0px 0px 10px 1px rgba(0,0,0,0.3);\n          box-shadow:inset 0px 0px 10px 1px rgba(0,0,0,0.3);\n  -webkit-transform:scale(0.95);\n          transform:scale(0.95);\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-7\">\n      <app-drawing-canvas [color]=\"color\" [penWidth]=\"penWidth\"></app-drawing-canvas>\n      <div class=\"color-pickers\">\n        <button class=\"color\" (click)=\"changeColor('#000000');\" [style.background]=\"'#000000'\"></button>\n        <button class=\"color\" (click)=\"changeColor('#ff0000');\" [style.background]=\"'#ff0000'\"></button>\n        <button class=\"color\" (click)=\"changeColor('#00ff00');\" [style.background]=\"'#00ff00'\"></button>\n        <button class=\"color\" (click)=\"changeColor('#0000ff');\" [style.background]=\"'#0000ff'\"></button>\n      </div>\n      <div class=\"pen-selector\">\n        <button class=\"pen-width\" (click)=\"changePenWidth(2)\">2px</button>\n        <button class=\"pen-width\" (click)=\"changePenWidth(4)\">4px</button>\n        <button class=\"pen-width\" (click)=\"changePenWidth(6)\">6px</button>\n      </div>\n    </div>\n\n    <div class=\"col-5\">\n      <app-chat></app-chat>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.color = "#000000";
        this.penWidth = 2;
    }
    AppComponent.prototype.changeColor = function (color) {
        this.color = color;
    };
    AppComponent.prototype.changePenWidth = function (width) {
        this.penWidth = width;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drawing_canvas_drawing_canvas_component__ = __webpack_require__("./src/app/drawing-canvas/drawing-canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__drawing_canvas_drawing_canvas_component__["a" /* DrawingCanvasComponent */],
                __WEBPACK_IMPORTED_MODULE_5__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".chat{\n  margin:20px auto;\n  width:100%;\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\n  <div *ngFor=\"let message of messages\">\n    {{message.text}}\n  </div>\n\n  <input [(ngModel)]=\"message\" />\n  <button (click)=\"sendMessage()\">Send</button>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.message);
        this.message = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.getMessages().subscribe(function (data) {
            _this.messages.push(data);
        });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);


var ChatService = /** @class */ (function () {
    function ChatService() {
        this.url = 'http://localhost:8080';
    }
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());



/***/ }),

/***/ "./src/app/drawing-canvas/drawing-canvas.component.css":
/***/ (function(module, exports) {

module.exports = "canvas{\n    /* width:800px;\n    height:500px; */\n    border:1px solid #dedede;\n    margin:20px auto;\n    display:block;\n}"

/***/ }),

/***/ "./src/app/drawing-canvas/drawing-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #drawingCanvas></canvas>"

/***/ }),

/***/ "./src/app/drawing-canvas/drawing-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingCanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawingCanvasComponent = /** @class */ (function () {
    // lineWidth: number = 1;
    function DrawingCanvasComponent() {
        this.url = "http://localhost:8080";
        this.penColor = "#000";
    }
    DrawingCanvasComponent.prototype.eventListener = function (canvas) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
            .fromEvent(canvas, 'mousedown')
            .switchMap(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */]
                .fromEvent(canvas, 'mousemove')
                .takeUntil(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(canvas, 'mouseup'))
                .takeUntil(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(canvas, 'mouseleave'))
                .pairwise();
        })
            .subscribe(function (res) {
            var rect = canvas.getBoundingClientRect();
            var prevPos = {
                x: res[0]["clientX"] - rect.left,
                y: res[0]["clientY"] - rect.top
            };
            var currPos = {
                x: res[1]["clientX"] - rect.left,
                y: res[1]["clientY"] - rect.top
            };
            _this.draw(prevPos, currPos);
        });
    };
    DrawingCanvasComponent.prototype.draw = function (previous, current) {
        console.log(this.ctx);
        console.log(previous.x, previous.y);
        // this.ctx.beginPath();
        // this.ctx.lineWidth= 10;
        // this.ctx.strokeStyle="blue";
        // this.ctx.rect(20,20,10,10);
        // this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.penWidth;
        this.ctx.moveTo(previous.x, previous.y);
        this.ctx.lineTo(current.x, current.y);
        this.ctx.stroke();
    };
    DrawingCanvasComponent.prototype.ngAfterViewInit = function () {
        var canvasEl = this.drawingCanvas.nativeElement;
        canvasEl.width = 600;
        canvasEl.height = 400;
        this.ctx = canvasEl.getContext("2d");
        // this.ctx.strokeStyle = this.color;
        // this.ctx.lineWidth = this.lineWidth;
        this.eventListener(canvasEl);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('drawingCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], DrawingCanvasComponent.prototype, "drawingCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DrawingCanvasComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DrawingCanvasComponent.prototype, "penWidth", void 0);
    DrawingCanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-drawing-canvas',
            template: __webpack_require__("./src/app/drawing-canvas/drawing-canvas.component.html"),
            styles: [__webpack_require__("./src/app/drawing-canvas/drawing-canvas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DrawingCanvasComponent);
    return DrawingCanvasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map