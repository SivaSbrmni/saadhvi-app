import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-transformer-name-plate",
  templateUrl: "./transformer-name-plate.component.html",
  styleUrls: [ "./transformer-name-plate.component.css" ]
})
export class TransformerNamePlateComponent implements OnInit {
  @Input("data") data: any;
  arrayOfConfigKeys: string[] = [];
  arrayOfParamKeys: string[] = [];
  constructor() {}

  ngOnInit(): void {
    Object.keys(this.data.config).forEach((element) => {
      this.arrayOfConfigKeys.push(element);
    });
    Object.keys(this.data.param).forEach((element) => {
      this.arrayOfParamKeys.push(element);
    });
  }
}
