import { Component } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent {
  selectedType: string = 'vegetarian';
  activeDay: string | null = null;

  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  meals = [
    { name: 'Breakfast', vegImg: 'assets/oats.png', nonVegImg: 'assets/meal/oats.png' },
    { name: 'Lunch', vegImg: 'assets/quina.png', nonVegImg: 'assets/nonveg-lunch.jpg' },
    { name: 'Dinner', vegImg: 'assets/panner.png', nonVegImg: 'assets/nonveg-dinner.jpg' }
  ];

  setMealType(type: string) {
    this.selectedType = type;
  }

  toggleMeals(day: string) {
    this.activeDay = this.activeDay === day ? null : day;
  }

  getMealImage(meal: any): string {
    return this.selectedType === 'vegetarian' ? meal.vegImg : meal.nonVegImg;
  }
}