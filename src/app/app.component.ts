import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  pictureUrl$: Observable<string>;
  navLinks;
  activeLinkIndex: any;
  constructor(public authService: AuthService, private router: Router) {
    router.navigate([ "/home" ]);
  }
  ngOnInit(): void {
    this.navLinks = [
      {
        link: "/home",
        name: "Home",
        icon: "home"
      },
      {
        link: "/inst-param",
        name: "Inst Parameter",
        icon: "subway"
      },
      {
        link: "/alerts",
        name: "Alerts",
        icon: "traffic"
      },
      {
        link: "/load-survey",
        name: "Load Survey",
        icon: "train"
      },
      {
        link: "/daily-profile",
        name: "Daily Profile",
        icon: "tram"
      },
      {
        link: "/mitigation-strategy",
        name: "Mitigation Strategy",
        icon: "satellite"
      },
      {
        link: "/analytics",
        name: "Analytics",
        icon: "museum"
      }
    ];
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find((tab) => tab.link === "." + this.router.url));
    });
  }
}
