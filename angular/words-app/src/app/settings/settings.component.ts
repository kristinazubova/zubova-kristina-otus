import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: any
  wordsCountOptions: any
  chosenLang:string
  chosenNum:number

  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  raiseSave(): void {
    this.save.emit({
      chosenLang: this.chosenLang,
      chosenNum: this.chosenNum
    })
  }

  handleLang(lang): void {
    this.chosenLang = lang
  }

  handleNum(num): void {
    this.chosenNum = num
  }

}
