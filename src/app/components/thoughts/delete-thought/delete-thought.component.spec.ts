import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThoughtComponent } from './delete-thought.component';

describe('DeleteThoughtComponent', () => {
  let component: DeleteThoughtComponent;
  let fixture: ComponentFixture<DeleteThoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteThoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
