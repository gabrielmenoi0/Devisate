import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfonetPage } from './infonet.page';

describe('InfonetPage', () => {
  let component: InfonetPage;
  let fixture: ComponentFixture<InfonetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfonetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfonetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
