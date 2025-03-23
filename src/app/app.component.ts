import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentsService } from './shared/assignments.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, 
    MatIconModule, RouterLink, SidebarComponent, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'Premier projet Angular';
  isSidebarOpen = true; // Track sidebar state
  isResponsive = false;

  constructor(private assignmentsService: AssignmentsService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.isResponsive = width < 768; // Adjust breakpoint as needed
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; // Toggle sidebar state
  }

  genererDonneesDeTest() {
    console.log("Génération des données de test");
    this.assignmentsService.peuplerBDavecForkJoin()
    .subscribe(() => {
      console.log("Toutes les données de test ont été insérées");
      window.location.href = '/home';
    });
  }
}
