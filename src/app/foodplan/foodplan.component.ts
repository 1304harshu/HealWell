import { Component } from '@angular/core';

@Component({
  selector: 'app-foodplan',
  templateUrl: './foodplan.component.html',
  styleUrls: ['./foodplan.component.scss']
})
export class FoodplanComponent {
  mealType: string = 'vegetarian'; // Default selection
  visibleDay: string | null = null;

  setMealType(type: string): void {
    this.mealType = type;
  }

  toggleMeals(dayId: string): void {
    this.visibleDay = this.visibleDay === dayId ? null : dayId;
  }
}
