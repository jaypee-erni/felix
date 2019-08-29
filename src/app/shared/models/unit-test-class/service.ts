import { of, Observable, throwError } from 'rxjs';

export class MockApiService {
    get(url): Observable<any> {
        if (url.indexOf('throwerrorUnitTest') > -1) {
        return throwError(500);
        }
        return of([{
            id: 1, title: 'test', author: 'testauthor'
        }]);
    }
}

export class MockMatDialogStub {
    open() {
      return {
        data : {},
        afterClosed: () => of('confirm')
      };
    }
}

export class MockActiveRoute {
    get params() {
      return of(true);
    }
}

export class MockRouterStub {
    navigate(params) {
      // params value will be depending on the route provided in component
    }
  }
