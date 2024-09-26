import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Role } from '../enums/role.enum';
import { Status } from '../enums/status.enum';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private readonly storageKey = 'users';

	constructor() {}

	public getUsers(): IUser[] {
		const users = localStorage.getItem(this.storageKey);

		if (users) {
			return JSON.parse(users);
		} else {
			const users = this.generateTestData();
			this.setUsers(users);
			return users;
		}
	}

	public setUsers(users: IUser[]): void {
		localStorage.setItem(this.storageKey, JSON.stringify(users));
	}

	public updateUser(updatedUser: IUser): void {
		const users = this.getUsers();
		const userIndex = users.findIndex(user => user.id === updatedUser.id);
		if (userIndex > -1) {
			users[userIndex] = updatedUser;
			this.setUsers(users);
		}
	}

	public generateTestData(): IUser[] {
		const users: IUser[] = [];
		for (let i = 1; i <= 100; i++) {
			users.push({
				id: i,
				login: `user${i}`,
				email: `user${i}@example.com`,
				phone: `12345678${i}`,
				create_at: new Date(),
				modified_at: new Date(),
				role: i % 2 === 0 ? Role.Admin : Role.User,
				status: i % 3 === 0 ? Status.Blocked : Status.Active,
				hasSignature: i % 2 === 0
			});
		}
		return users;
	}
}
