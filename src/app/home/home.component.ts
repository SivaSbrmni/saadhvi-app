import { map } from "rxjs/operators";
import { HomeService } from "./home.service";
import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "./home.component.html",
  selector: "app-home",
  styleUrls: [ "./home.component.css" ]
})
export class HomeComponent implements OnInit {
  nameplate = { param: {}, config: {} };
  trasformerData$;
  statusArray$;
  constructor(public homeService: HomeService) {}
  ngOnInit(): void {
    this.trasformerData$ = this.homeService.getTxfrData();
    this.statusArray$ = this.homeService.getStatusData();
    this.nameplate.config = {
      KVA: [
        {
          value: 7245.32
        }
      ],
      "Volts No Loads": [
        {
          highLow: "H V",
          value: 9145.32
        },
        {
          highLow: "L V",
          value: 914.32
        }
      ],
      Amperes: [
        {
          highLow: "H V",
          value: 4166.32
        },
        {
          highLow: "L V",
          value: 174.32
        }
      ],
      Phases: [
        {
          highLow: "H V",
          value: 4155.32
        },
        {
          highLow: "L V",
          value: 170.32
        }
      ]
    };
    this.nameplate.param = {
      "Type Of COding": [
        {
          value: "cooltype5"
        }
      ],
      Frequency: [
        {
          value: 49.23,
          unit: "Hz"
        }
      ],
      "Impedance Volts": [
        {
          value: 1735.5,
          unit: "(%)"
        }
      ],
      "Connection Symbol": [
        {
          value: "DY 11"
        }
      ],
      "Core and winding": [
        {
          value: 1756.23,
          unit: "Kg"
        }
      ],
      "Total Weight": [
        {
          value: "1254",
          unit: "Kg"
        }
      ],
      Oil: [
        {
          value: "5662",
          unit: "L"
        }
      ],
      "Year of Manufacturer": [
        {
          value: "2012"
        }
      ]
    };
  }
}

export interface NamePlate {
  highLow?: string;
  value: number;
  unit?: string;
}
