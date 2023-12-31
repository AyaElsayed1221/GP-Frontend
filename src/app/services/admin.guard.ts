import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor (private loginservice:LoginserviceService , private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.loginservice.isLoggedIn()&& this.loginservice.getUserRole()=='ROLE_ADMIN')
      {
        return true
      }
this.router.navigate(['login']);
    return false;
  }
  
}
