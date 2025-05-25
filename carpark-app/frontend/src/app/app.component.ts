import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <div *ngIf="!isAuthenticated">
                <app-login></app-login>
            </div>
            <div *ngIf="isAuthenticated">
                <div style="padding: 20px; background: #f8f9fa; border-bottom: 1px solid #dee2e6;">
                    <h1>Carpark Application</h1>
                    <button
                            (click)="logout()"
                            style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
                    >
                        Logout
                    </button>
                </div>
                <app-car-list></app-car-list>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit {
    isAuthenticated = false;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.token$.subscribe(token => {
            this.isAuthenticated = !!token;
        });
    }

    logout() {
        this.authService.logout();
    }
}