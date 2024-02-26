import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.sass'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Croque Madame', 'Ham and swiss on toast with a benedict egg', 'https://foodprofessionals.blueberry.org/wp-content/uploads/sites/3/2021/04/05_BlueberryCroqueMadame_0024_1440x2160-772x1132.jpg'),
    new Recipe('Croque Monsier', 'Ham and swiss on toast with a benedict egg', 'https://foodprofessionals.blueberry.org/wp-content/uploads/sites/3/2021/04/05_BlueberryCroqueMadame_0024_1440x2160-772x1132.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
