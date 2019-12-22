import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private httpClient: HttpClient) {}
  /**
   * login
   *
   * @author xuzongping
   * @returns {Observable<boolean>}
   * @memberof AuthService
   */
  public login(user: {
    username: string;
    password: string;
  }): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => (this.isLoggedIn = true))
    );
    // return this.httpClient.post().pipe();
  }
  /**
   * logout
   *
   * @author xuzongping
   * @memberof AuthService
   */
  public logout(): void {
    this.isLoggedIn = false;

    console.log('loginout');
  }
}
