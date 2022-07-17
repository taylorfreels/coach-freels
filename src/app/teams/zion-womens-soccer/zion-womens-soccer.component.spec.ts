import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZionWomensSoccerComponent } from './zion-womens-soccer.component';

describe('ZionWomensSoccerComponent', () => {
  let component: ZionWomensSoccerComponent;
  let fixture: ComponentFixture<ZionWomensSoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZionWomensSoccerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZionWomensSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
