import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
    // ...other components...
  ],
  imports: [
    CommonModule,
    FormsModule // Add FormsModule to imports
  ],
  exports: [
    LoginComponent
    // ...other exports...
  ]
})
export class AuthModule { }