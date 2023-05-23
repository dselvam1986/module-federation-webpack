import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-com-lib',
  template: `
    <p>
      com-lib works!
    </p>
  `,
  styles: [
  ]
})
export class ComLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
