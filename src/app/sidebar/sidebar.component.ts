import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule], // Add MatIconModule
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen = true; // Track sidebar state

  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'Add Assignment', route: '/add' },
    { label: 'Assignments', route: '/assignments' }
  ];

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
