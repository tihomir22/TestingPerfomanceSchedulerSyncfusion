import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTablaComponent } from './test-tabla.component';

describe('TestTablaComponent', () => {
  let component: TestTablaComponent;
  let fixture: ComponentFixture<TestTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
