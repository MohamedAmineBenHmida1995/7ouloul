import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    template: `
    <div *ngIf="!authService.isAuthenticated()">
      <app-login></app-login>
      <app-register></app-register>
    </div>
    <div *ngIf="authService.isAuthenticated()">
      <app-car-list></app-car-list>
    </div>
  `
})
export class AppComponent {
    constructor(public authService: AuthService) {}
}