import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { environment } from "./../environments/environment";
import { AlertsComponent } from "./alerts/alerts.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth/auth.guard.service";
import { DailyProfileComponent } from "./daily-profile/daily-profile.component";
import { HomeComponent } from "./home/home.component";
import { InstrumentParameterComponent } from "./instrument-parameter/intrument-parameter.component";
import { LoadSurveyComponent } from "./load-survey/load-survey.component";
import { MitigationStrategyComponent } from "./mitigation-strategy/mitigation-strategy.component";
import { SharedModule } from "./shared/shared.module";
/**
 * Application entry point
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstrumentParameterComponent,
    AlertsComponent,
    LoadSurveyComponent,
    DailyProfileComponent,
    MitigationStrategyComponent,
    AnalyticsComponent  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SharedModule,

  ],
  providers: [ AuthGuard, HttpClient ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
