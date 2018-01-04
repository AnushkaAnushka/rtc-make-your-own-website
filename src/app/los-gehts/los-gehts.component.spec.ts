import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosGehtsComponent } from './los-gehts.component';

describe('LosGehtsComponent', () => {
  let component: LosGehtsComponent;
  let fixture: ComponentFixture<LosGehtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosGehtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosGehtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
