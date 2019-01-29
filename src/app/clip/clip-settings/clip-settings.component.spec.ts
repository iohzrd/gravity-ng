import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipSettingsComponent } from './clip-settings.component';

describe('ClipSettingsComponent', () => {
  let component: ClipSettingsComponent;
  let fixture: ComponentFixture<ClipSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
