import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThoughtsComponent } from './create-thoughts.component';

describe('CreateThoughtsComponent', () => {
  let component: CreateThoughtsComponent;
  let fixture: ComponentFixture<CreateThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
