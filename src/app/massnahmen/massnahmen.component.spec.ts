import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassnahmenComponent } from './massnahmen.component';

describe('MassnahmenComponent', () => {
  let component: MassnahmenComponent;
  let fixture: ComponentFixture<MassnahmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassnahmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassnahmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
