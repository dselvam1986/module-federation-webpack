import { Inject, Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { APP_NAME } from "../app-name.token";


@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private messageSubject = new BehaviorSubject<string>('');

    constructor(@Inject(APP_NAME) private appName: string){
        console.log("Initalized in ", appName)
    }
    
    sendMessage(data: string): void {
        console.log('data', data)
        this.messageSubject.next(data);
    }

    getData(): Observable<string> {
        return this.messageSubject.asObservable();
    }
}