import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrviewComponent } from './clrview.component';

describe('ClrviewComponent', () => {
  let component: ClrviewComponent;
  let fixture: ComponentFixture<ClrviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClrviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClrviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
