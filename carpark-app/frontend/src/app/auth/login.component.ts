import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    template: `
    <h2>Login</h2>
    <form (submit)="login()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
    username = '';
    password = '';

    constructor(private authService: AuthService) {}

    login() {
        this.authService.login(this.username, this.password);
    }
}