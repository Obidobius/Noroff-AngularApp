import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckCardsComponent } from './chuck-cards.component';

describe('ChuckCardsComponent', () => {
  let component: ChuckCardsComponent;
  let fixture: ComponentFixture<ChuckCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
