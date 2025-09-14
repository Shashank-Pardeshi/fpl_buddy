import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDbDataComponent } from './add-db-data.component';

describe('AddDbDataComponent', () => {
  let component: AddDbDataComponent;
  let fixture: ComponentFixture<AddDbDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDbDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDbDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
