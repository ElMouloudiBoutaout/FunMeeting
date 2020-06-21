import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import {map} from 'rxjs/operators';


export class BasicAuthHtppInterceptorService implements HttpInterceptor {


    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        if(sessionStorage.getItem("username") && sessionStorage.getItem("token")){
        req = req.clone({
                setHeaders: {
                  Authorization: sessionStorage.getItem('token')
                }
            })
        }

        return next.handle(req).pipe(
          map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                  console.log('event--->>>', event);
              }
              return event;
          }));
    }




}