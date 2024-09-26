import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrl: './user-card.component.scss',
	encapsulation: ViewEncapsulation.None
})
export class UserCardComponent {
	public currentFilter: any = {};
	public isFilterOpened: boolean = true;

	public toggleFilter(value: boolean | null = null): void {
		if (!value) {
			this.isFilterOpened = !this.isFilterOpened;
			return;
		}

		this.isFilterOpened = value;
	}

	public applyFilter(filterValues: any): void {
		this.currentFilter = filterValues;
	}
}
