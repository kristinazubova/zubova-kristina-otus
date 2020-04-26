import { Component } from '@angular/core';
import { ExercisesComponent } from './exercises/exercises.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'words-app';
  words = localStorage.words
    ? JSON.parse(localStorage.words)
    : []
  settings = {
    time: 1,
    languages: ['english'],
    wordsCount: this.words.length,
    selectedLanguage: 'english',
    chosenWordsNum: this.words.length
  }
  activeTabs = [false, false, false]

  onOutletLoaded(component) {
    if (component instanceof SettingsComponent) {
      component.settings = this.settings;
      component.wordsCountOptions = Array(this.settings.wordsCount)
        .fill(1)
        .map((x, i) => i + 1)

      component.save.subscribe(newSettings => {
        this.settings.selectedLanguage = newSettings.chosenLang
        this.settings.chosenWordsNum = newSettings.chosenNum
        location.pathname = '/exercises'
      })
    } else if (component instanceof ExercisesComponent) {
      component.words = this.words
      component.settings = this.settings
      component.currentWordIndex = 0
    }
    else if (component instanceof RecentlyAddedComponent) {
      component.words = this.words;
      component.save.subscribe((newWordPair) => {
        this.words.push(newWordPair)
        localStorage.setItem('words', JSON.stringify(this.words))
      })
    }
  }

  clickTab(index): void {
    for(let i = 0; i < this.activeTabs.length; i++) {
      if(index === i) {
        this.activeTabs[i] = true;
      }
      else {
        this.activeTabs[i] = false;
      }
    }
  }
}
