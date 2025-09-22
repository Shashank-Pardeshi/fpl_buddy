import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTabsComponent } from './stat-tabs.component';

describe('StatTabsComponent', () => {
  let component: StatTabsComponent;
  let fixture: ComponentFixture<StatTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
