import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLibComponent } from './forms-lib.component';

describe('FormsLibComponent', () => {
  let component: FormsLibComponent;
  let fixture: ComponentFixture<FormsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
