import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.sass'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Egg', 1),
    new Ingredient('Bread', 1)
  ];

}
