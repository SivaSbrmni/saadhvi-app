import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "./../service/auth.service";
/**
 * Authentication guards, decides whether the user has access to visit the route or not. 
 *
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      map((res) => {
        return this.validateUser(res);
        // return true;
      })
    );
  }

  validateUser(user): boolean {
    if (user) {
      return true;
    } else {
      this.authService.logout();
      this.router.navigate([ "login" ]);
      return false;
    }
  }
}
