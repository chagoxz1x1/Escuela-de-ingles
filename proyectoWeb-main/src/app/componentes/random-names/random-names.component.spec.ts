import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNamesComponent } from './random-names.component';

describe('RandomNamesComponent', () => {
  let component: RandomNamesComponent;
  let fixture: ComponentFixture<RandomNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
