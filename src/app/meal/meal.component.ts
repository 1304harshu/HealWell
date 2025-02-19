import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  animations: [
    trigger('slideFromRight', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })), 
      transition(':enter', [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class MealComponent implements OnInit {
  selectedDay: string = 'monday';
  currentMealType: string = 'vegetarian';

  mealsData: { [key: string]: any } = {
    monday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    tuesday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    wednesday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    thursday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    friday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    saturday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    sunday: {
      breakfast: {
        veg: { img: 'assets/meal/oats.png', recipe: 'Oats with honey and nuts' },
        nonVeg: { img: 'assets/meal/food2.jpg', recipe: 'Egg omelette with toast' }
      },
      lunch: {
        veg: { img: 'assets/meal/quina.png', recipe: 'Quinoa salad with fresh veggies' },
        nonVeg: { img: 'assets/meal/nonveg-lunch.jpg', recipe: 'Chicken curry with steamed rice' }
      },
      dinner: {
        veg: { img: 'assets/meal/panner.png', recipe: 'Spicy Paneer Tikka Masala' },
        nonVeg: { img: 'assets/meal/nonveg-dinner.jpg', recipe: 'Grilled fish with sautéed vegetables' }
      }
    },
    // Similarly, update for other days...
  };

  ngOnInit(): void {
    this.setMealType('vegetarian');
  }
  get mealTypeKey(): string {
    return this.currentMealType === 'vegetarian' ? 'veg' : 'nonVeg';
  }  

  toggleMeals(day: string): void {
    if (this.selectedDay !== day) {
      this.selectedDay = ''; // Force remove existing content (triggers animation)
      setTimeout(() => {
        this.selectedDay = day;
      }, 50);
    }
  }

  setMealType(type: string): void {
    this.currentMealType = type;
  }  
}
