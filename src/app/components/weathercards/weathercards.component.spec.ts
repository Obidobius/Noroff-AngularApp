import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercardsComponent } from './weathercards.component';

describe('WeathercardsComponent', () => {
  let component: WeathercardsComponent;
  let fixture: ComponentFixture<WeathercardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathercardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
