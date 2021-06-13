import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '0a7e920cab314dac99854fea309d8211',
                'x-rapidspi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473'

            }
        })
        return next.handle(req);
    }
}