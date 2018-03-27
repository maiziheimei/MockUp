import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellDesignComponent } from './modell-design.component';

describe('ModellDesignComponent', () => {
  let component: ModellDesignComponent;
  let fixture: ComponentFixture<ModellDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModellDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModellDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
