import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    // Check if token exists in localStorage on service initialization
    this.isLoggedIn.next(!!this.getToken());
  }

  // 🔹 Login user
  login(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload).pipe(
      tap((response: any) => {
        console.log("response>>", response)
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response));
          // this.isLoggedIn.next(true);
        }
      })
    );
  }

  // 🔹 Logout user
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }

    saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // 🔹 Get JWT token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 🔹 Get logged-in user details
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // 🔹 Check authentication status (boolean)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // 🔹 Auth status as Observable (for guards, header, etc.)
  getAuthStatus(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}
