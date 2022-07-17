import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZionMensSoccerComponent } from './zion-mens-soccer.component';

describe('ZionMensSoccerComponent', () => {
  let component: ZionMensSoccerComponent;
  let fixture: ComponentFixture<ZionMensSoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZionMensSoccerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZionMensSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
