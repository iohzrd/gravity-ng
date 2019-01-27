import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipGridComponent } from './clip-grid.component';

describe('ClipGridComponent', () => {
  let component: ClipGridComponent;
  let fixture: ComponentFixture<ClipGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
