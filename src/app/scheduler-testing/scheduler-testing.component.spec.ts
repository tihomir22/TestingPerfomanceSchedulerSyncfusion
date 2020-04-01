import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerTestingComponent } from './scheduler-testing.component';

describe('SchedulerTestingComponent', () => {
  let component: SchedulerTestingComponent;
  let fixture: ComponentFixture<SchedulerTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
