import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  title = 'angprojremote';
  constructor() { }

  ngOnInit(): void {
  }

}
