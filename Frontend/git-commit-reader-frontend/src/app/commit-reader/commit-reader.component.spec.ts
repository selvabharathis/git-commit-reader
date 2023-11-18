import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitReaderComponent } from './commit-reader.component';

describe('CommitReaderComponent', () => {
  let component: CommitReaderComponent;
  let fixture: ComponentFixture<CommitReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
