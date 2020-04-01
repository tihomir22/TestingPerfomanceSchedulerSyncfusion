import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-tabla",
  templateUrl: "./test-tabla.component.html",
  styleUrls: ["./test-tabla.component.scss"]
})
export class TestTablaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.cogemeLosValoresDeLaTabla();
  }

  private cogemeLosValoresDeLaTabla(): void {
    document.querySelectorAll("table > tbody > tr").forEach(fila => {
      fila.querySelectorAll("td").forEach(dataCell => {
        console.log(dataCell.innerText);
      });
    });
  }
}
