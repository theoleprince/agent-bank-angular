import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccountUserComponent } from './card-account-user.component';

describe('CardAccountUserComponent', () => {
  let component: CardAccountUserComponent;
  let fixture: ComponentFixture<CardAccountUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAccountUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
