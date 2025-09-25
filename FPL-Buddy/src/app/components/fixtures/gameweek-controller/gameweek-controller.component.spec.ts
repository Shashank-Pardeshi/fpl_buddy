import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameweekControllerComponent } from './gameweek-controller.component';

describe('GameweekControllerComponent', () => {
  let component: GameweekControllerComponent;
  let fixture: ComponentFixture<GameweekControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameweekControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameweekControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
