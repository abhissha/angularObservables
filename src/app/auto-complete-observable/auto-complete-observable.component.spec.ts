import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteObservableComponent } from './auto-complete-observable.component';

describe('AutoCompleteObservableComponent', () => {
  let component: AutoCompleteObservableComponent;
  let fixture: ComponentFixture<AutoCompleteObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
