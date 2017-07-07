import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
@ViewChild('nameInput') nameInput: ElementRef;
@ViewChild('amountInput') amountInput: ElementRef;
@Output('itemCreated') itemCreated = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddToList(nameInput, amountInput){
    console.log(nameInput.value);
    console.log(amountInput.value);
    this.itemCreated.emit({
      name: nameInput.value,
      amount: amountInput.value
    });
  }
}
