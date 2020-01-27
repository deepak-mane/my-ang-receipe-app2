import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test receipe1', 'https://p0.pikrepo.com/preview/96/306/slice-of-cake-on-plate.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test receipe2', 'https://p0.pikrepo.com/preview/768/1012/two-slices-of-mangoes-on-bowls.jpg'),
    new Recipe('A Test Recipe3', 'This is simply a test receipe3', 'https://p0.pikrepo.com/preview/79/231/five-red-mangoes-beside-white-plate-with-peeled-mango-and-knife.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
