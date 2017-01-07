/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { About2Component } from './about-2.component';

describe('About2Component', () => {
  let component: About2Component;
  let fixture: ComponentFixture<About2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ About2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(About2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
