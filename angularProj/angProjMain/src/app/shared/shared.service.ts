import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private messageSubject = new BehaviorSubject<string>('');

    sendMessage(data: string): void {
        this.messageSubject.next(data);
    }

    getData(): Observable<string> {
        return this.messageSubject.asObservable();
    }
}