import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { firebase, firebaseui } from "firebaseui-angular";
import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: [ "./login.component.css" ]
})
export class LoginComponent implements OnInit {
  // Firebase UI configuration
  firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      {
        requireDisplayName: true,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      }
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    signInSuccessUrl: "/home",
    callbacks: {
      signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
    }
  };
  ui: firebaseui.auth.AuthUI;
  constructor(private afAuth: AngularFireAuth, private ngZone: NgZone, private router: Router) {}
  ngOnInit(): void {
    this.afAuth.authState.subscribe((res) => {
      if (!!res) {
        this.onLoginSuccessful(res);
      } else {
        try {
          this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
        } catch (error) {
          this.ui = firebaseui.auth.AuthUI.getInstance();
        }
        this.ui.start("#firebaseui-authcontainer", this.firebaseUiAuthConfig);
      }
    });
  }

  onLoginSuccessful(result) {
    console.log("Firebase UI result:", result);
    this.ngZone.run(() => this.router.navigateByUrl("/home"));
  }
}