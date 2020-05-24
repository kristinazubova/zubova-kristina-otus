import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesComponent } from './exercises.component';
import { FormGroup, FormControl } from '@angular/forms';

describe('ExercisesComponent', () => {
  let component: ExercisesComponent;
  let fixture: ComponentFixture<ExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesComponent);
    component = fixture.componentInstance;

    component.words = []
    component.settings = {
      time: 1,
      languages: ['english'],
      wordsCount: 5,
      selectedLanguage: 'english',
      chosenWordsNum: 5
    };
    component.currentWordIndex = 0
    component.exerciseForm = new FormGroup({
      translatedWord: new FormControl(''),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
