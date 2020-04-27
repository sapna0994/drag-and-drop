import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDragImageComponent } from './text-drag-image.component';

describe('TextDragImageComponent', () => {
  let component: TextDragImageComponent;
  let fixture: ComponentFixture<TextDragImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDragImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDragImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
