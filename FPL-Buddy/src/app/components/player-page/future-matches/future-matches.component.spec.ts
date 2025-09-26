import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureMatchesComponent } from './future-matches.component';

describe('FutureMatchesComponent', () => {
  let component: FutureMatchesComponent;
  let fixture: ComponentFixture<FutureMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
