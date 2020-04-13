import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-render-key-val-pair",
  templateUrl: "./render-key-val-pair.component.html",
  styleUrls: [ "./render-key-val-pair.component.css" ]
})
export class RenderKeyValPairComponent implements OnInit {
  @Input("data") data: Object;
  arrayOfKeys: string[] = [];
  constructor() {}

  ngOnInit(): void {
    Object.keys(this.data).forEach((element) => {
      this.arrayOfKeys.push(element);
    });
  }
}
