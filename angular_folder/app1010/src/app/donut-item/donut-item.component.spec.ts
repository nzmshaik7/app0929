import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutItemComponent } from './donut-item.component';

describe('DonutItemComponent', () => {
  let component: DonutItemComponent;
  let fixture: ComponentFixture<DonutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
