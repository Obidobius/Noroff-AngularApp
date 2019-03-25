import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerycardsComponent } from './brewerycards.component';

describe('BrewerycardsComponent', () => {
  let component: BrewerycardsComponent;
  let fixture: ComponentFixture<BrewerycardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewerycardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
