import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Role } from '../../enums/role.enum';
import { Status } from '../../enums/status.enum';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-users-filter',
	templateUrl: './users-filter.component.html',
	styleUrl: './users-filter.component.scss'
})
export class UsersFilterComponent {
	private userService = inject(UserService);

	@Output() public filterChange = new EventEmitter<any>();
	@Output() public isFilterOpenedChange = new EventEmitter<boolean>();

  	public roles = Object.values(Role); 
	public statuses = Object.values(Status);

	public selectedRole: Role = Role.User;
	public selectedStatus: Status = Status.Active;

	public filterForm = new FormGroup({
		login: new FormControl(''),
		phone: new FormControl(''),
		dateCreatedAt: new FormControl(''),
		dateModifiedAt: new FormControl(''),
		email: new FormControl('', Validators.email),
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
