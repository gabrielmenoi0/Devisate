import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecadmPage } from './tecadm.page';

describe('TecadmPage', () => {
  let component: TecadmPage;
  let fixture: ComponentFixture<TecadmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecadmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecadmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
