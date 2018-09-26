import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAZComponent } from './name-a-z.component';

describe('NameAZComponent', () => {
  let component: NameAZComponent;
  let fixture: ComponentFixture<NameAZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameAZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameAZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
