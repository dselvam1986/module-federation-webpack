import { Inject, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { APP_NAME } from "../app-name.token";

interface msgSubject {
    message: string;
    fromHost: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    
    storeSubject = new BehaviorSubject<number>(0);
    store$ = this.storeSubject.asObservable();

    counterSubject = new BehaviorSubject<number>(0);
    counter$ = this.counterSubject.asObservable();

    messageHostSubject = new BehaviorSubject<string>('');
    messageHost$ = this.messageHostSubject.asObservable();

    messageClientSubject = new BehaviorSubject<string>('');
    messageClient$ = this.messageClientSubject.asObservable();

    constructor(@Inject(APP_NAME) private appName: string){
        console.log("Initalized in ", appName)
    }
    
}