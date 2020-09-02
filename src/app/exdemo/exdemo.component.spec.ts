import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExdemoComponent } from './exdemo.component';

describe('ExdemoComponent', () => {
  let component: ExdemoComponent;
  let fixture: ComponentFixture<ExdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
