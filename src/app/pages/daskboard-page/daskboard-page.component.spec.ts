import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaskboardPageComponent } from './daskboard-page.component';

describe('DaskboardPageComponent', () => {
  let component: DaskboardPageComponent;
  let fixture: ComponentFixture<DaskboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaskboardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaskboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
