import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})
export class RecentlyAddedComponent implements OnInit {
  words: any
  showInput: boolean = false
  russianWord: string = ''
  translatedWord: string = ''

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() { }

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
}
