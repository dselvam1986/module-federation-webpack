import { Inject, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { APP_NAME } from "../app-name.token";


@Injectable({
    providedIn: 'root'
})
export class SharedService {
    
    counterSubject = new BehaviorSubject<number>(0);
    counter$ = this.counterSubject.asObservable();

    messageSubject = new BehaviorSubject<number>(0);
    message$ = this.messageSubject.asObservable();

    constructor(@Inject(APP_NAME) private appName: string){
        console.log("Initalized in ", appName)
    }
    
}