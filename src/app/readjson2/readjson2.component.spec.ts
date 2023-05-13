import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Readjson2Component } from './readjson2.component';

describe('Readjson2Component', () => {
  let component: Readjson2Component;
  let fixture: ComponentFixture<Readjson2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Readjson2Component]
    });
    fixture = TestBed.createComponent(Readjson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
