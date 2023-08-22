import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const roles = route.data['roles'] as string[];
    const userRoles = this.authService.getUserRoles();

    const canActivate = roles.some(role => userRoles.includes(role));

    if (!canActivate) {
      this.router.navigate(['/login']); // Redirect to unauthorized page
    }

    return canActivate;
  }
}
