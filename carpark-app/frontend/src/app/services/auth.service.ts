import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private token: string | null = null;

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        const body = new URLSearchParams();
        body.set('grant_type', 'password');
        body.set('client_id', 'carpark-client');
        body.set('client_secret', 'client-secret');
        body.set('username', username);
        body.set('password', password);

        this.http.post<any>('http://localhost:8080/realms/carpark/protocol/openid-connect/token',
            body.toString(), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).subscribe(data => {
            this.token = data.access_token;
            if (this.token!=null) {
                localStorage.setItem('access_token', this.token);
            }
        });
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('access_token');
    }

    getToken(): string | null {
        return localStorage.getItem('access_token');
    }
}