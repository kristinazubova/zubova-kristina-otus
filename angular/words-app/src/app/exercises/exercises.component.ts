import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  exerciseForm = new FormGroup({
    translatedWord: new FormControl(''),
  });
  words: any
  settings: any
  currentWordIndex: number
  wordsCounter: number = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  nextWord(): void {
    if (this.currentWordIndex < this.settings.chosenWordsNum - 1) {
      if (this.exerciseForm.value.translatedWord == this.words[this.currentWordIndex]['russian']) {
        this.wordsCounter++
        this.currentWordIndex++
        this.exerciseForm.reset()
      }
      else {
        alert('Error!')
      }
    } else {
      alert('Thats all!')
      this.currentWordIndex = 0
    }
  }
}
