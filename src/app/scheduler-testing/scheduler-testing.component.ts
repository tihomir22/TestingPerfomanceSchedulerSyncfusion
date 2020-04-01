import { Component, OnInit, ViewChild } from "@angular/core";
import {
  View,
  GroupModel,
  ScheduleComponent
} from "@syncfusion/ej2-angular-schedule";
import data from "./data.json";
import { min, max } from "lodash";
import { timer } from "rxjs";
@Component({
  selector: "app-scheduler-testing",
  templateUrl: "./scheduler-testing.component.html",
  styleUrls: ["./scheduler-testing.component.scss"]
})
export class SchedulerTestingComponent implements OnInit {
  public rowAutoHeight: boolean = false;
  public selectedDate: Date = new Date();
  public currentView: View = "TimelineMonth";
  public renderID: string = "dembow";
  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;
  public seteoTErminado: boolean = false;
  public group: GroupModel = {
    resources: ["CentrosTrabajo"]
  };
  public allowMultiple: boolean = true;
  public eventSettings: any;
  public virtualscroll: boolean = true;
  public currentInterval = 3;
  public minDate: Date;
  public maxDate: Date;
  public columnasNivel1: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.setScheduler(data);
  }

  public getColumnDataResourceData(
    data: any,
    key: string,
    tipo: "label" | "sublabel"
  ): string {
    let res = "";
    if (tipo == "label" && key == "text") {
      let valorPrincipal = data.resourceData[key];
      let idPrincipal = data.resourceData.id;
      let parsedPrincipalValue =
        valorPrincipal && valorPrincipal.length > 0
          ? " - " + valorPrincipal
          : valorPrincipal;
      res = idPrincipal + parsedPrincipalValue;
    } else if (tipo == "sublabel") {
      res = data.resourceData[key];
    }

    return res;
  }

  private returnDataSource(schedulerFromBack: any): Array<any> {
    let res = schedulerFromBack.cargasCentroEventsModels.map(entry => {
      let newEntry = {
        Id: entry.id,
        orden: entry.cargasCentroIds.orden,
        Subject: entry.name,
        StartTime: new Date(entry.startDate),
        EndTime: new Date(entry.endDate),
        IsAllDay: false,
        resourceId: entry.resourceId,
        extraData: entry.cargasCentroIds
      };

      return newEntry;
    });
    return res;
  }

  private calcularIntervalos(initialDate: Date, finalDate: Date): number {
    let resultadoFechas: any = this.dateDiff(initialDate, finalDate);
    if ((resultadoFechas as any) != NaN) {
      switch (this.currentView) {
        case "TimelineDay":
          return resultadoFechas.d;
        case "TimelineWeek":
          return resultadoFechas.d / 7;
        case "TimelineMonth":
          return resultadoFechas.d / 30;
        default:
          return -1;
      }
    }
  }

  public dateDiff(date1: Date, date2: Date): any | any {
    var diff = Date.parse(date2.toString()) - Date.parse(date1.toString());
    return isNaN(diff)
      ? NaN
      : {
          diff: diff,
          ms: Math.floor(diff % 1000),
          s: Math.floor((diff / 1000) % 60),
          m: Math.floor((diff / 60000) % 60),
          h: Math.floor((diff / 3600000) % 24),
          d: Math.floor(diff / 86400000)
        };
  }

  private setScheduler(schedulerFromBack: any) {
    let arrayfilas = schedulerFromBack.cargasCentroResources.map(entry => {
      return {
        text: entry.name,
        id: entry.id,
        color: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
        role: entry.role,
        cssClassField: "classEvento" + entry.id
      };
    });
    this.columnasNivel1 = arrayfilas;
    let dataSourceScheduler = this.returnDataSource(schedulerFromBack);
    if (dataSourceScheduler) {
      let fechasInicialesDeEventos: Array<Date> = dataSourceScheduler.map(
        entry => entry.StartTime
      );
      let fechasFinalesDeEventos: Array<Date> = dataSourceScheduler.map(
        entry => entry.EndTime
      );
      this.minDate = min(fechasInicialesDeEventos);
      this.minDate.setDate(this.minDate.getDate() - 5);
      this.maxDate = max(fechasFinalesDeEventos);
      this.maxDate.setDate(this.maxDate.getDate() + 5);
      this.currentInterval = Math.ceil(
        this.calcularIntervalos(this.minDate, this.maxDate)
      );
      this.selectedDate = this.minDate;
    }

    this.eventSettings = {
      dataSource: dataSourceScheduler,
      enableTooltip: true,
      allowAdding: false,
      allowDeleting: false
      // tooltipTemplate: this.schedulerGeneral.devolverTemplateTooltip()
    };
    console.log([this.eventSettings, this.columnasNivel1]);
    this.seteoTErminado = true;
    //this.scheduleObj.dataBind();
  }
}
