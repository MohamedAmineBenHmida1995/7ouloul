import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class CarService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    getCars(): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.authService.getToken()}`
        });
        return this.http.get('http://localhost:8081/voitures', { headers });
    }
}