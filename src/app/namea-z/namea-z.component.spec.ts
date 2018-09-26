import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameaZComponent } from './namea-z.component';

describe('NameaZComponent', () => {
  let component: NameaZComponent;
  let fixture: ComponentFixture<NameaZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameaZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameaZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
