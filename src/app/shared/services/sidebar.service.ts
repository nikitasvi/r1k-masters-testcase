import { inject, Injectable } from "@angular/core";
import { WindowSizeService } from "./widow-sizes.service";
import { WindowSize } from "../enums/window-size.enum";

@Injectable({
	providedIn: "root"
})
export class SidebarService {
	private windowSizeService = inject(WindowSizeService);

	public isSidebarOpened = true;

	constructor() {
		this.windowSizeService.screenSize$
			.subscribe((value) => {
				if (value <= WindowSize.LAPTOP) {
					this.toggleSidebar(false);
				} else {
					this.toggleSidebar(true);
				}
			});
	}

	public toggleSidebar(value: boolean | null = null): void {
		if (!value && value === null) {
			this.isSidebarOpened = !this.isSidebarOpened;
			return;
		}

		this.isSidebarOpened = value;
	}
}