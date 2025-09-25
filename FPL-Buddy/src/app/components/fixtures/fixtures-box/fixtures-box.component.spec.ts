import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesBoxComponent } from './fixtures-box.component';

describe('FixturesBoxComponent', () => {
  let component: FixturesBoxComponent;
  let fixture: ComponentFixture<FixturesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixturesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixturesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
