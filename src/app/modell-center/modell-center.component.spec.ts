import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellCenterComponent } from './modell-center.component';

describe('ModellCenterComponent', () => {
  let component: ModellCenterComponent;
  let fixture: ComponentFixture<ModellCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModellCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModellCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
