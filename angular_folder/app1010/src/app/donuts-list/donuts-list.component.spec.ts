import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutsListComponent } from './donuts-list.component';

describe('DonutsListComponent', () => {
  let component: DonutsListComponent;
  let fixture: ComponentFixture<DonutsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
