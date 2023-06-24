import { HTTP_INTERCEPTORS, HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginserviceService } from "./loginservice.service";
import { ContactusServiceService } from "./contactus-service.service";




@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginservice:LoginserviceService, private contactUsService:ContactusServiceService,private http: HttpClient)
    {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

// add the jwt token (localstorage) request 
      let authReq=req;
       const token=this.loginservice.getToken();

       console.log("inside interceptor")
       if (token!= null)
       {
           authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}`},
        
        });
       }
       return next.handle(authReq);
    }



   
      
     
}

export const authIntercertorProviders= [
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    },
] 


