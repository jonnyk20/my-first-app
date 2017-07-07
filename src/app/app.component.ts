import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tab: string = 'sho';
  switch() {
    
  }
 onTabSwitched(selection){
  if (selection == 'Recipes')
    {this.tab = 'rec';} else {this.tab ='sho'}

 }

}
