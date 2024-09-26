import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	private router = inject(Router);
	public activeSection: string | null = null;

	public toggleDropdown(section: string) {
		if (this.activeSection === section) {
			this.activeSection = null;
		} else {
			this.activeSection = section;
		}
	}

	public isSectionActive(section: string, routes: string[]): boolean {
		return this.activeSection === section || routes.some(route => this.router.isActive(route, false));
	}
}
