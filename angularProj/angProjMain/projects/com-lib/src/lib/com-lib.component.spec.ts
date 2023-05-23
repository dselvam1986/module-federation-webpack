import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLibComponent } from './com-lib.component';

describe('ComLibComponent', () => {
  let component: ComLibComponent;
  let fixture: ComponentFixture<ComLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
