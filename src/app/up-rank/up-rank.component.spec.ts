import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpRankComponent } from './up-rank.component';

describe('UpRankComponent', () => {
  let component: UpRankComponent;
  let fixture: ComponentFixture<UpRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
