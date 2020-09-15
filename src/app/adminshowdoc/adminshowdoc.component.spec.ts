import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowdocComponent } from './adminshowdoc.component';

describe('AdminshowdocComponent', () => {
  let component: AdminshowdocComponent;
  let fixture: ComponentFixture<AdminshowdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
