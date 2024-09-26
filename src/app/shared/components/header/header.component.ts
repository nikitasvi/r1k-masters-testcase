import { Component, inject } from '@angular/core';
import { WindowSizeService } from '../../services/widow-sizes.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	public windowSizeService = inject(WindowSizeService);
	public sidebarService = inject(SidebarService);
}
