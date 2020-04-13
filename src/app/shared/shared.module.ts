import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FirebaseUIModule } from "firebaseui-angular";
import { ParametersComponent } from "./common-components/parameters/parameters.component";
import { RenderKeyValPairComponent } from "./common-components/render-key-val-pair/render-key-val-pair.component";
import { StatusComponent } from "./common-components/status/status.component";
import { TransformerNamePlateComponent } from "./common-components/transformer-name-plate/transformer-name-plate.component";
import { MatComponentsModule } from "./mat-components/mat-components.module";

@NgModule({
  declarations: [ RenderKeyValPairComponent, TransformerNamePlateComponent, ParametersComponent, StatusComponent ],
  imports: [ MatComponentsModule, CommonModule, FlexLayoutModule ],
  exports: [
    MatComponentsModule,
    RenderKeyValPairComponent,
    TransformerNamePlateComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserModule,
    AngularFireAuthModule,
    FirebaseUIModule,
    ParametersComponent,
    StatusComponent]
})
export class SharedModule {}
