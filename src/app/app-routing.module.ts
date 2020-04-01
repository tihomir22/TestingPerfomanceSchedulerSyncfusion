import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestTablaComponent } from "./test-tabla/test-tabla.component";
import { SchedulerTestingComponent } from './scheduler-testing/scheduler-testing.component';

const routes: Routes = [
  {
    path: "",
    component: SchedulerTestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
