import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example5Component } from './example5.component';

describe('Example5Component', () => {
  let component: Example5Component;
  let fixture: ComponentFixture<Example5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
