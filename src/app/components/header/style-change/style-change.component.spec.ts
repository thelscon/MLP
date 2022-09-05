import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleChangeComponent } from './style-change.component';

describe('StyleChangeComponent', () => {
  let component: StyleChangeComponent;
  let fixture: ComponentFixture<StyleChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
