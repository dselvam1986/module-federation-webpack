import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angProjMain';

  ngOnInit(): void {
      // this.loadAngRemoteModule().then((m)=>{
      //   console.log('remote ang module', m);
        
      // })
  }
  
  async loadAngRemoteModule(){
    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'angular_app',
      exposedModule: 'AngRemoteModule'
    });

    return module;
  }
}
