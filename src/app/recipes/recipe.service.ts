import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Croque Madame', 
            'Ham and swiss on toast with a benedict egg', 
            'https://foodprofessionals.blueberry.org/wp-content/uploads/sites/3/2021/04/05_BlueberryCroqueMadame_0024_1440x2160-772x1132.jpg',
            [
                new Ingredient('Ham', 1),
                new Ingredient('Egg', 1)
            ]),
        new Recipe(
            'Croque Monsieur', 
            'Ham and swiss on toast with a benedict egg', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2017/07/Croque-monsiuer-da6fdfd.jpg?quality=90&resize=556,505',
            [
                new Ingredient('Hame', 1),
                new Ingredient('Swiss', 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}