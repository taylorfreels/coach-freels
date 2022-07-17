import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTeamComponent } from './base-team.component';

describe('BaseTeamComponent', () => {
  let component: BaseTeamComponent;
  let fixture: ComponentFixture<BaseTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
