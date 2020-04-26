import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  words: any
  settings: any
  currentWordIndex: number
  translatedWord: string

  constructor() { }

  ngOnInit(): void {
  }

  nextWord(): void {
    if (this.currentWordIndex < this.settings.chosenWordsNum - 1) {
      if (this.translatedWord == this.words[this.currentWordIndex]['russian']) {
        this.currentWordIndex++
        this.translatedWord = ''
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
