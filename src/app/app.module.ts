import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms'; // Add this import
import { AuthModule } from './auth/auth.module'; // Import AuthModule

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
    // ...existing declarations...
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this to the imports array
    AuthModule // Add AuthModule to imports
    // ...existing imports...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
