import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MfeMessageService } from 'shared-mfe-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angProjMain';
  user: any;
  currentPath:any = '';

  constructor(private mfeShared: MfeMessageService, private router: Router){}

  ngOnInit(): void {
      this.user = this.mfeShared.user;

      this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          this.currentPath = event.url;    
        }
      })
  }
}
