import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Readjson1Component } from './readjson1.component';

describe('Readjson1Component', () => {
  let component: Readjson1Component;
  let fixture: ComponentFixture<Readjson1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Readjson1Component]
    });
    fixture = TestBed.createComponent(Readjson1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
