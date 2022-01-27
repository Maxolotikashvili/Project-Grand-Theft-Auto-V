import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Grand-Theft-Auto-V';

  // 
  // Bar Button
  // 

  active:boolean = false;

  toggleButton() {
    this.active = !this.active;
  };

  //

  constructor() { }


  



}


