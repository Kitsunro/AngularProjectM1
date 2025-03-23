import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports : [FormsModule],
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="onLogin()">
      <label for="username">Username:</label>
      <input id="username" [(ngModel)]="username" name="username" required>
      <label for="password">Password:</label>
      <input id="password" type="password" [(ngModel)]="password" name="password" required>
      <button type="submit">Login</button>
    </form>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
