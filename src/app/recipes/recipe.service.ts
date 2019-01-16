import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    


    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Biryani', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Rice', 200),
            new Ingredient('Chicken',100)

        ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(id:number){
          return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.shoppingListService.addIngredients(ingredients);
      }
}