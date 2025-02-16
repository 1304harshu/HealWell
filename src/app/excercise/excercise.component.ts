import { Component } from '@angular/core';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrl: './excercise.component.scss'
})
export class ExcerciseComponent {

// Standard workout categories
workoutTypes = [
  { name: 'Cardio', selected: false },
  { name: 'Strength', selected: false },
  { name: 'Yoga', selected: false },
  { name: 'Cycling', selected: false },
];

// New "Workouts For" section in the sidebar
workoutForCategories = [
  { name: 'Neck Pain', selected: false },
  { name: 'Pregnancy', selected: false },
  { name: 'Back Pain', selected: false },
  { name: 'Headache', selected: false }
];

difficultyLevels = [
  { name: 'Beginner', selected: false },
  { name: 'Intermediate', selected: true },
  { name: 'Advanced', selected: false }
];

workouts = [
  // Strength Workouts
  { title: 'Strength & Tone', type: 'Strength', trainer: 'Mike Anderson', duration: 35, level: 'Intermediate', equipment: ['No Equipment'], rating: 4.8, image: 'assets/workout/plank.png', videoUrl: "https://youtu.be/xb0vui7Ny8A?si=VaE5xbSQpDUabw2a" },
  { title: 'Strength Circuit', type: 'Strength', trainer: 'Sarah Johnson', duration: 30, level: 'Beginner', equipment: ['Dumbbells', 'Yoga Mat'], rating: 5.0, image: 'assets/workout/strength.png', videoUrl: "https://youtu.be/DcrKNPtqmGM?si=WWfQufw9EWi5s-Ty" },
  { title: 'Full Body Strength', type: 'Strength', trainer: 'John Carter', duration: 40, level: 'Advanced', equipment: ['Dumbbells'], rating: 4.9, image: 'assets/workout/fullbody.png', videoUrl: "https://youtu.be/UIPvIYsjfpo?si=Xf22K54hIitS8trS" },

  // Yoga Workouts
  { title: 'Power Yoga Stretch', type: 'Yoga', trainer: 'Emma Lee', duration: 32, level: 'Intermediate', equipment: ['Yoga Mat', 'Dumbbells'], rating: 4.7, image: 'assets/workout/yoga.png', videoUrl: "https://youtu.be/neFgA144o7c?si=ySxmhekEX6cc3_mS" },
  { title: 'Flow Yoga Power', type: 'Yoga', trainer: 'Lisa Brown', duration: 35, level: 'Beginner', equipment: ['Yoga Mat'], rating: 4.8, image: 'assets/workout/flowyoga.png', videoUrl: "https://youtu.be/Av7yZ_2yl2A?si=G0jlCZFa96avWgj5" },
  { title: 'Advanced Vinyasa Flow', type: 'Yoga', trainer: 'Mark Wilson', duration: 45, level: 'Advanced', equipment: ['Yoga Mat'], rating: 4.7, image: 'assets/workout/adyoga.png', videoUrl: "https://youtu.be/B6-YJRMlA2M?si=ChwyApqWuthvtPqf" },

  // Cycling
  { title: 'Cycling Endurance', type: 'Cycling', trainer: 'Jason White', duration: 40, level: 'Intermediate', equipment: ['No Equipment'], rating: 4.5, image: 'assets/workout/cycling.png', videoUrl: "https://youtu.be/DBUJg6hngs0?si=Rwyb6lxQoxLvMSYc" },
  { title: 'Spin Bike Challenge', type: 'Cycling', trainer: 'Samantha Rose', duration: 35, level: 'Advanced', equipment: ['No Equipment'], rating: 4.6, image: 'assets/workout/spin.png', videoUrl: "https://youtu.be/TY0f2mgR3GI?si=ORa_5l7xQFnE1UnU" },
  { title: 'Beginner Cycling', type: 'Cycling', trainer: 'Tom Harris', duration: 30, level: 'Beginner', equipment: ['No Equipment'], rating: 4.9, image: 'assets/workout/cycle.png', videoUrl: "https://youtu.be/4ssLDk1eX9w?si=tGM1Ohzl7XRQmoU2" },

  // New "Workouts For" Categories
  { title: 'Neck Pain Relief Yoga', type: 'Neck Pain', trainer: 'Dr. Priya Sharma', duration: 20, level: 'Beginner', equipment: ['Yoga Mat'], rating: 4.9, image: 'assets/workout/neck.png', videoUrl: "https://youtu.be/X3-gKPNyrTA?si=jO29lmM_0WL-AsLk" },
  { title: 'Quick Neck Stretches', type: 'Neck Pain', trainer: 'Rajesh Kumar', duration: 15, level: 'Intermediate', equipment: ['No Equipment'], rating: 4.7, image: 'assets/workout/neckstrch.png', videoUrl: "https://youtu.be/XtHfEI5DUE0?si=K0FSc3g6ISkWa1bv" },
  { title: 'Neck Mobility Exercises', type: 'Neck Pain', trainer: 'Neha Verma', duration: 25, level: 'Advanced', equipment: ['Yoga Mat'], rating: 4.8, image: 'assets/workout/neckflex.png', videoUrl: "https://youtu.be/dCdK822nH7E?si=HwTEX_wiyDLu81g0" },

  { title: 'Prenatal Yoga', type: 'Pregnancy', trainer: 'Anjali Mehta', duration: 30, level: 'Beginner', equipment: ['Yoga Mat'], rating: 4.8, image: 'assets/workout/prenatal.png', videoUrl: "https://youtu.be/44fYnoSLL3c?si=hHQ1uOtV3JUzVbJU" },
  { title: 'Gentle Pregnancy Stretches', type: 'Pregnancy', trainer: 'Sonia Patel', duration: 25, level: 'Intermediate', equipment: ['Yoga Mat'], rating: 4.9, image: 'assets/workout/pregsrtch.png', videoUrl: "https://youtu.be/VNBrlpArbdI?si=7lpa1J-sGP-ZzHP8" },
  { title: 'Breathing Exercises for Pregnancy', type: 'Pregnancy', trainer: 'Ritika Sharma', duration: 20, level: 'Beginner', equipment: ['No Equipment'], rating: 4.7, image: 'assets/workout/breathing.png', videoUrl: "https://youtu.be/6I7BVXiscEY?si=0NCHA5ynwNHFKCu-" },

  { title: 'Back Pain Recovery', type: 'Back Pain', trainer: 'Rohan Kapoor', duration: 25, level: 'Intermediate', equipment: ['Yoga Mat', 'Dumbbells'], rating: 4.7, image: 'assets/workout/back.png', videoUrl: "https://youtu.be/DxIeqiyYZkQ?si=-WQZd0OEBXM5AMjX" },
  { title: 'Spinal Stretching', type: 'Back Pain', trainer: 'Meera Joshi', duration: 20, level: 'Beginner', equipment: ['Yoga Mat'], rating: 4.9, image: 'assets/workout/streching.png', videoUrl: "https://youtu.be/_sQV7LXbddg?si=1iXClOOUoPmdjs82" },
  { title: 'Lower Back Mobility', type: 'Back Pain', trainer: 'Anand Gupta', duration: 30, level: 'Advanced', equipment: ['Dumbbells'], rating: 4.8, image: 'assets/workout/lower.png', videoUrl: "https://youtu.be/qkYtE740cHg?si=567SC-cIbGdctgZ0" },

  { title: 'Headache Relief Yoga', type: 'Headache', trainer: 'Meera Verma', duration: 15, level: 'Beginner', equipment: ['No Equipment'], rating: 4.6, image: 'assets/workout/relief.png', videoUrl: "https://youtu.be/Zr2T2QDCmqQ?si=2dnYs9gDwNq1CjLc" },
  { title: 'Pressure Point Massage', type: 'Headache', trainer: 'Dr. Ravi Sharma', duration: 10, level: 'Intermediate', equipment: ['No Equipment'], rating: 4.8, image: 'assets/workout/pressoint.png', videoUrl: "https://youtu.be/EQThroAoAmQ?si=Z4UZ4JMD59N-K-9Y"},
  { title: 'Relaxation Techniques', type: 'Headache', trainer: 'Aarti Singh', duration: 20, level: 'Advanced', equipment: ['Yoga Mat'], rating: 4.7, image: 'assets/workout/relax.png', videoUrl: "https://youtu.be/iqcAWup2aCE?si=Lff4HsoL8buJCXGM" }
];

openVideo(url: string) {
  window.open(url, '_blank'); // Opens YouTube video in a new tab
}

filteredWorkouts = [...this.workouts];

filterWorkouts() {
  const selectedTypes = [...this.workoutTypes, ...this.workoutForCategories]
    .filter(type => type.selected)
    .map(type => type.name);

  const selectedLevels = this.difficultyLevels.filter(level => level.selected).map(level => level.name);

  this.filteredWorkouts = this.workouts.filter(workout =>
    (selectedTypes.length === 0 || selectedTypes.includes(workout.type)) &&
    (selectedLevels.length === 0 || selectedLevels.includes(workout.level))
  );

  if (this.filteredWorkouts.length === 0) {
    this.filteredWorkouts = [...this.workouts]; // Prevent empty state
  }
}
}