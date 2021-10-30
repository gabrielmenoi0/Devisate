import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecdsPage } from './tecds.page';

describe('TecdsPage', () => {
  let component: TecdsPage;
  let fixture: ComponentFixture<TecdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecdsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
