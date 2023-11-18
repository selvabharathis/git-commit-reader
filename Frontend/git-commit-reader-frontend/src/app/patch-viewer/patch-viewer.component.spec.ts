import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchViewerComponent } from './patch-viewer.component';

describe('PatchViewerComponent', () => {
  let component: PatchViewerComponent;
  let fixture: ComponentFixture<PatchViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
