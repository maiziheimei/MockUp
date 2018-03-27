import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KriterienComponent } from './kriterien.component';

describe('KriterienComponent', () => {
  let component: KriterienComponent;
  let fixture: ComponentFixture<KriterienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KriterienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KriterienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
