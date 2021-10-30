import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermagemPage } from './enfermagem.page';

describe('EnfermagemPage', () => {
  let component: EnfermagemPage;
  let fixture: ComponentFixture<EnfermagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
