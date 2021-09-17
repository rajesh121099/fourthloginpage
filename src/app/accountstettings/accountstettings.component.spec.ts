import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountstettingsComponent } from './accountstettings.component';

describe('AccountstettingsComponent', () => {
  let component: AccountstettingsComponent;
  let fixture: ComponentFixture<AccountstettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountstettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountstettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
