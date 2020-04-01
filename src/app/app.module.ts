import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestTablaComponent } from "./test-tabla/test-tabla.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SchedulerTestingComponent } from "./scheduler-testing/scheduler-testing.component";
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  TimelineViewsService,
  DragAndDropService,
  ResizeService,
  TimelineMonthService,
  ScheduleAllModule,
  RecurrenceEditorAllModule
} from "@syncfusion/ej2-angular-schedule";

@NgModule({
  declarations: [AppComponent, TestTablaComponent, SchedulerTestingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    DragAndDropService,
    ResizeService,
    TimelineMonthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
