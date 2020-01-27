import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('chocolate',3),
    new Ingredient('mangoes',5),
    new Ingredient('apples',16),
  ];

  constructor() { }

  ngOnInit() {
  }

}
