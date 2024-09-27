import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from '../../enums/role.enum';
import { Status } from '../../enums/status.enum';

@Component({
	selector: 'app-users-filter',
	templateUrl: './users-filter.component.html',
	styleUrl: './users-filter.component.scss'
})
export class UsersFilterComponent {
	@Output() public filterChange = new EventEmitter<any>();
	@Output() public isFilterOpenedChange = new EventEmitter<boolean>();

	public roles = Object.values(Role); 
	public statuses = Object.values(Status);

	public selectedRole: Role = Role.User;
	public selectedStatus: Status = Status.Active;

	public filterForm = new FormGroup({
		login: new FormControl('', Validators.pattern('^[a-zA-Z0-9_-]{3,16}$')),
		phone: new FormControl('', Validators.pattern('^\\+?[0-9]{10,15}$')),
		dateCreatedAt: new FormControl(''),
		dateModifiedAt: new FormControl(''),
		email: new FormControl('', Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')),
		role: new FormControl(''),
		status: new FormControl(''),
	});

	public onApplyFilter(): void {
		const filterValues = this.filterForm.getRawValue();
		this.filterChange.emit(filterValues);
	}

	public clearField(fieldName: string): void {
		this.filterForm.get(fieldName)?.setValue('');
	}

	public isFormEmpty(): boolean {
		const formValues = this.filterForm.getRawValue();
		return Object.values(formValues).every(value => !value);
	}

	public onCancel(): void {
		//this.isFilterOpened = false;
		this.isFilterOpenedChange.emit(false);
		this.filterForm.reset();
	}

	public onReset(): void {
		this.filterForm.reset();
		this.filterChange.emit(this.filterForm.getRawValue());
	}
}
