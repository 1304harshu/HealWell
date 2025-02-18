import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.setMealType("vegetarian"); // Default to vegetarian when the page loads
  }

  toggleMeals(day: string): void {
    // Hide all meal sections
    document.querySelectorAll<HTMLElement>('.meals').forEach(meal => {
      meal.classList.remove("show");
    });

    // Show only the selected day's meals
    const selectedDay = document.getElementById(day);
    if (selectedDay) {
      selectedDay.classList.add("show");
    }
  }

  setMealType(type: string): void {
    const vegMeals = document.querySelectorAll<HTMLElement>(".veg");
    const nonVegMeals = document.querySelectorAll<HTMLElement>(".non-veg");

    if (type === "vegetarian") {
      vegMeals.forEach(img => img.style.display = "block");
      nonVegMeals.forEach(img => img.style.display = "none");
    } else {
      vegMeals.forEach(img => img.style.display = "none");
      nonVegMeals.forEach(img => img.style.display = "block");
    }
  }
}

