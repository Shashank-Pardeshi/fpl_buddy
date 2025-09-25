import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureDifficultyBoxComponent } from './fixture-difficulty-box.component';

describe('FixtureDifficultyBoxComponent', () => {
  let component: FixtureDifficultyBoxComponent;
  let fixture: ComponentFixture<FixtureDifficultyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixtureDifficultyBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureDifficultyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
