import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputchildComponent } from './inputchild.component';

describe('InputchildComponent', () => {
  let component: InputchildComponent;
  let fixture: ComponentFixture<InputchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
