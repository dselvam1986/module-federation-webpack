import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MfeMessageService {

  private c2HSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public c2h$ = this.c2HSubject.asObservable();

  private h2CSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public h2c$ = this.h2CSubject.asObservable();

  private userName: string ='';

  public get user(): string {
    return this.userName;
  }
  constructor() { }

  public login(userName: string, password: string): void {
    this.userName = userName
  }

  sendToHost(newValue: string): void {
    this.c2HSubject.next(newValue);
  }
  
  sendToClient(newValue: string): void {
    this.h2CSubject.next(newValue);
  }
}
