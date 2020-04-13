import { AnalyticsComponent } from "./analytics/analytics.component";
import { MitigationStrategyComponent } from "./mitigation-strategy/mitigation-strategy.component";
import { DailyProfileComponent } from "./daily-profile/daily-profile.component";
import { LoadSurveyComponent } from "./load-survey/load-survey.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard.service";
import { HomeComponent } from "./home/home.component";
import { InstrumentParameterComponent } from "./instrument-parameter/intrument-parameter.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "inst-param",
    component: InstrumentParameterComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "alerts",
    component: AlertsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "load-survey",
    component: LoadSurveyComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "daily-profile",
    component: DailyProfileComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "mitigation-strategy",
    component: MitigationStrategyComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "analytics",
    component: AnalyticsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "login",
    component: LoginComponent,
    loadChildren: () => import("./login/login.module").then((login) => login.LoginModule)
  },
  {
    path: "**",
    component: HomeComponent
    // canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
