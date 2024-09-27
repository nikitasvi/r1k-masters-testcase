import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrl: './user-card.component.scss',
	encapsulation: ViewEncapsulation.None
})
export class UserCardComponent {
	@ViewChild(UsersListComponent) usersListComponent!: UsersListComponent;

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

	public unblockSelected(): void {
		this.usersListComponent.toggleHasSignatureForSelectedUsers(true); // Разблокировать
	}

	public blockSelected(): void {
		this.usersListComponent.toggleHasSignatureForSelectedUsers(false); // Заблокировать
	}
}
