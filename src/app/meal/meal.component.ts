import { Component } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent {
   toggleMeals(day) {
    let mealsDiv = document.getElementById(day);

    // Close all other meal divs smoothly
    document.querySelectorAll('.meals').forEach(meal => {
        if (meal !== mealsDiv) {
            meal.classList.remove("show");
        }
    });

    // Toggle visibility of clicked day meals
    mealsDiv.classList.toggle("show");
}

 setMealType(type) {
    let vegMeals = document.querySelectorAll(".veg");
    let nonVegMeals = document.querySelectorAll(".non-veg");

    if (type === "vegetarian") {
        vegMeals.forEach(img => img.style.display = "block");
        nonVegMeals.forEach(img => img.style.display = "none");
    } else {
        vegMeals.forEach(img => img.style.display = "none");
        nonVegMeals.forEach(img => img.style.display = "block");
    }
}

// Default to vegetarian when the page loads
document.addEventListener("DOMContentLoaded", () => {
    setMealType("vegetarian");
});

}