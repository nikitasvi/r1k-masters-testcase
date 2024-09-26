import { Component, inject } from '@angular/core';
import { WindowSizeService } from './shared/services/widow-sizes.service';
import { SidebarService } from './shared/services/sidebar.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	public windowSizeService = inject(WindowSizeService);
	public sidebarService = inject(SidebarService);
}
