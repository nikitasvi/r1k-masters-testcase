import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrl: './user-card.component.scss',
	encapsulation: ViewEncapsulation.None
})
export class UserCardComponent {
	public isFilterOpened: boolean = true;

	public filterForm = new FormGroup({
		login: new FormControl(''),
		phone: new FormControl(''),
		dateCreatedAt: new FormControl(''),
		dateModifiedAt: new FormControl(''),
		email: new FormControl(''),
		role: new FormControl(''),
		status: new FormControl(''),
	});

	public clearField(fieldName: string): void {
		this.filterForm.get(fieldName)?.setValue('');
	}

	public toggleFilter(): void {
		this.isFilterOpened = !this.isFilterOpened;
	}
}
