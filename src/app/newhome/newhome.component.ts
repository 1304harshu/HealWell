import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrl: './newhome.component.scss'
})
export class NewhomeComponent {

 ngAfterViewInit() {
    // ✅ Typing Animation Logic
    new Typed('#typed', {
      strings: ["Recovery"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    // ✅ Feedback Slider Logic
    const reviews = document.querySelectorAll(".review");
    const dots = document.querySelectorAll(".dot");
    let reviewIndex = 0;
    const intervalTime = 4000;
    let sliderInterval: any;

    const showReview = (index: number) => {
      reviews.forEach((review, i) => {
        review.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      reviewIndex = index;
    };

    const nextReview = () => {
      reviewIndex = (reviewIndex + 1) % reviews.length;
      showReview(reviewIndex);
    };

    const startSlider = () => {
      sliderInterval = setInterval(nextReview, intervalTime);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        clearInterval(sliderInterval);
        showReview(index);
        startSlider();
      });
    });

    if (reviews.length > 0) {
      showReview(reviewIndex);
      startSlider();
    }
  }
}
