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

  saveWord(): void {
    this.save.emit({
      russian: this.russianWord,
      english: this.translatedWord
    })

    this.russianWord = ''
    this.translatedWord = ''
  }

  translateRussianWord(): void {
    this.httpClient.getTranslate(this.russianWord).subscribe((data: Translated) => {
      this.translatedWord = data.text[0]
    })
  }
}

interface Translated {
  text: string[]
}