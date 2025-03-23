import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// ...existing imports...

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
    // ...existing declarations...
  ],
  imports: [
    BrowserModule,
    // ...existing imports...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
