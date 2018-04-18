import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCreateComponent } from './photo-create.component';

describe('PhotoCreateComponent', () => {
  let component: PhotoCreateComponent;
  let fixture: ComponentFixture<PhotoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
