import { Component } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
    <h2>Register (via Keycloak UI)</h2>
    <a href="http://localhost:8080/realms/carpark/account">Go to Keycloak Registration</a>
  `
})
export class RegisterComponent {}
