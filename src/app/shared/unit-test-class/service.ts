export class mockApiService {
    get(url): Observable<any> {
        if (url.indexOf('throwerrorUnitTest') > -1) {
        return throwError(500);
        }
        return of(true);
    }
}