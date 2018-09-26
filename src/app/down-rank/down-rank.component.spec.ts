import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownRankComponent } from './down-rank.component';

describe('DownRankComponent', () => {
  let component: DownRankComponent;
  let fixture: ComponentFixture<DownRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
