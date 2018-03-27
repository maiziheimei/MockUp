import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZustaendeComponent } from './zustaende.component';

describe('ZustaendeComponent', () => {
  let component: ZustaendeComponent;
  let fixture: ComponentFixture<ZustaendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZustaendeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZustaendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
