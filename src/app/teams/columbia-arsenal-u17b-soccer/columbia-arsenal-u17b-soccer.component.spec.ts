import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumbiaArsenalU17bSoccerComponent } from './columbia-arsenal-u17b-soccer.component';

describe('ColumbiaArsenalU17bSoccerComponent', () => {
  let component: ColumbiaArsenalU17bSoccerComponent;
  let fixture: ComponentFixture<ColumbiaArsenalU17bSoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumbiaArsenalU17bSoccerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumbiaArsenalU17bSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
