import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { LocalStorageService } from "./local-storage.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private API_PATH = "/api";
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  pictureUrl$: Observable<string>;
  authState$: Observable<firebase.User>;
  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    protected localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.isLoggedIn$ = this.afAuth.authState.pipe(map((user) => !!user));

    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    this.pictureUrl$ = this.afAuth.authState.pipe(map((user) => (user ? user.photoURL : null)));

    this.authState$ = this.afAuth.authState;
  }

  login(email: string): any {
    const params = { email };
    return this.http.post(`${this.API_PATH}/login`, params);
  }

  logout() {
    this.afAuth.auth.signOut().then(
      () => {
        this.router.navigate([ "./login" ]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
