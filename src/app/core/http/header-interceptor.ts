import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';

export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const profile = JSON.parse(localStorage.getItem('user')) || {};

        // Clone the request to add the new header
        /** return this if backend is prepared */
        const clonedRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer ${profile.accessToken}`) });
        //const clonedRequest = req;

        // Pass the cloned request instead of the original request to the next handle
        return next.handle(clonedRequest);
    }
}
