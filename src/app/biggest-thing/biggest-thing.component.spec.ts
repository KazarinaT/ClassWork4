import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestThingComponent } from './biggest-thing.component';

describe('BiggestThingComponent', () => {
  let component: BiggestThingComponent;
  let fixture: ComponentFixture<BiggestThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggestThingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiggestThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
