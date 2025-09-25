import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesNavbarComponent } from './fixtures-navbar.component';

describe('FixturesNavbarComponent', () => {
  let component: FixturesNavbarComponent;
  let fixture: ComponentFixture<FixturesNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixturesNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixturesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
