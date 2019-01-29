import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportClipComponent } from './import-clip.component';

describe('ImportClipComponent', () => {
  let component: ImportClipComponent;
  let fixture: ComponentFixture<ImportClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
