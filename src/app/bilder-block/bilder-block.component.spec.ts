import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilderBlockComponent } from './bilder-block.component';

describe('BilderBlockComponent', () => {
  let component: BilderBlockComponent;
  let fixture: ComponentFixture<BilderBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilderBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
