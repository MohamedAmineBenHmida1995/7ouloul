import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private tokenSubject = new BehaviorSubject<string | null>(null);
    private readonly KEYCLOAK_URL = 'http://localhost:8080/realms/carpark/protocol/openid-connect/token';

    constructor(private http: HttpClient) {
        // Check for existing token on service initialization
        const token = localStorage.getItem('access_token');
        if (token) {
            this.tokenSubject.next(token);
        }
    }

    login(username: string, password: string): Observable<any> {
        const body = new URLSearchParams();
        body.set('grant_type', 'password');
        body.set('client_id', 'carpark-client');
        body.set('client_secret', 'client-secret');
        body.set('username', username);
        body.set('password', password);

        return this.http.post<any>(this.KEYCLOAK_URL, body.toString(), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).pipe(
            tap(response => {
                if (response.access_token) {
                    localStorage.setItem('access_token', response.access_token);
                    this.tokenSubject.next(response.access_token);
                }
            }),
            catchError((error: HttpErrorResponse) => {
                console.error('Login failed:', error);
                throw error;
            })
        );
    }

    logout(): void {
        localStorage.removeItem('access_token');
        this.tokenSubject.next(null);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    get token$(): Observable<string | null> {
        return this.tokenSubject.asObservable();
    }
}
