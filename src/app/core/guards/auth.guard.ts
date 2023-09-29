import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class AuthGurd {
  isLoggedOn = false;
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this._authService.isLoggedOn$.subscribe((value: any) => {
      this.isLoggedOn = value;
    });
    if (this.isLoggedOn) {
      return true;
    } else {
      return this._router.parseUrl('/auth');
    }
  }
}

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const auth = inject(AuthGurd);
  return auth.canActivate(route, state);
};

// let isLoggedOn = false;

// export const authGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): | Observable<boolean | UrlTree>
// | Promise<boolean | UrlTree>
// | boolean
// | UrlTree => {
//   const auth = inject(AuthService);
//   auth.isLoggedOn$.subscribe((value: any) => {
//     isLoggedOn = value
//   });
//   return isLoggedOn;
// };
