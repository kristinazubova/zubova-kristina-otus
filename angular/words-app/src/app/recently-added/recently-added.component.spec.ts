import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecentlyAddedComponent } from './recently-added.component';
import { HttpClient } from '@angular/common/http';

describe('RecentlyAddedComponent', () => {
  let component: RecentlyAddedComponent;
  let fixture: ComponentFixture<RecentlyAddedComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyAddedComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should translate and add word', () => {
    const fixture = TestBed.createComponent(RecentlyAddedComponent);
    component = fixture.componentInstance;

    component.words = [{
      english: 'bacon',
      russian: 'бекон'
    }]
    component.saveWord('молоко', 'milk');
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;

    let elementsArray = compiled.querySelectorAll('.recently__word-list')
    expect(elementsArray[elementsArray.length - 1].textContent).toContain('bacon - бекон');
  });
});
