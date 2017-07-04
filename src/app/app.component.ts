import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h3 {color: dodgerblue;}
  .white {color: white}
  `
  ]
})
export class AppComponent {
  title = 'app';
  display = false;
  clicks = [];
  counter =0;
  displayDetails() {
    if (this.display == true)
    {this.display = false; }
    else {this.display = true; }
    this.counter++;
    this.clicks.push(this.counter);
    
    
  }
 
}
