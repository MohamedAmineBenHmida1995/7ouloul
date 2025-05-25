import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    template: `
        <div style="max-width: 400px; margin: 50px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2>Login</h2>
            <form (ngSubmit)="login()" #loginForm="ngForm">
                <div style="margin-bottom: 15px;">
                    <input
                            [(ngModel)]="username"
                            name="username"
                            placeholder="Username"
                            required
                            style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
                    />
                </div>
                <div style="margin-bottom: 15px;">
                    <input
                            [(ngModel)]="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"
                    />
                </div>
                <button
                        type="submit"
                        [disabled]="!loginForm.form.valid || isLoading"
                        style="width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
                >
                    {{isLoading ? 'Loading...' : 'Login'}}
                </button>
            </form>
            <div *ngIf="errorMessage" style="color: red; margin-top: 10px;">
                {{errorMessage}}
            </div>
            <div style="margin-top: 15px; font-size: 12px; color: #666;">
                Test credentials: testuser / testpass
            </div>
        </div>
    `
})
export class LoginComponent {
    username = '';
    password = '';
    isLoading = false;
    errorMessage = '';

    constructor(private authService: AuthService) {}

    login() {
        if (!this.username || !this.password) {
            this.errorMessage = 'Please enter username and password';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';

        this.authService.login(this.username, this.password).subscribe({
            next: (response) => {
                console.log('Login successful');
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Login failed:', error);
                this.errorMessage = 'Login failed. Please check your credentials.';
                this.isLoading = false;
            }
        });
    }
}