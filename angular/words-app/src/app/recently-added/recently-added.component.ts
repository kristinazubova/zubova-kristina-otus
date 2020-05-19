import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],
  providers: [TranslateService]
})
export class RecentlyAddedComponent implements OnInit {
  words: any
  showInput: boolean = false
  russianWord: string = ''
  translatedWord: string = ''

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: TranslateService) { }

  ngOnInit(): void {
  }

  toggleInput(): void {
    this.showInput = !this.showInput
  }

  saveWord(russianWord, translatedWord): void {
    this.save.emit({
      russian: russianWord,
      english: translatedWord
    })  
  }

  translateRussianWord(): void {
    let wordsArray = this.russianWord.split(' ')

    wordsArray.forEach((word) => {
      this.httpClient.getTranslate(word).subscribe((data: Translated) => {
        this.saveWord(word, data.text[0])
      })
    })

    this.russianWord = ''
    this.translatedWord = ''
  }
}

interface Translated {
  text: string[]
}