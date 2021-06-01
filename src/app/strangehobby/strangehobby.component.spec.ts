import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrangehobbyComponent } from './strangehobby.component';

describe('StrangehobbyComponent', () => {
  let component: StrangehobbyComponent;
  let fixture: ComponentFixture<StrangehobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrangehobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrangehobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
