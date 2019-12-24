import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Steak', 'A very spicy dish',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3fjlsRkwvtxeVWMVnfmsuKtGQLMiIV_w-GhCyydx3K8EdEW_jQ&s'),
    new Recipe('Chola','A very spicy dish','https://thumbs.dreamstime.com/b/chole-puri-indian-meal-consisting-as-main-course-48375381.jpg')
   ];

  constructor() { }
  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }
   onRecipeSelect(recipe: Recipe) {
   this.theRecipe.emit(recipe);
  }
}
