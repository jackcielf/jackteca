import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThoughtComponent } from './card-thought.component';

describe('CardThoughtComponent', () => {
  let component: CardThoughtComponent;
  let fixture: ComponentFixture<CardThoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardThoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
