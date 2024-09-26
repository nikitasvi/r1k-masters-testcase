import { AfterViewInit, Component, inject, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IUser } from '../../models/user.model';
import { Status } from '../../enums/status.enum';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource} from "@angular/material/table";
import { SelectionModel } from '@angular/cdk/collections';
import { WindowSizeService } from '../../../../shared/services/widow-sizes.service';
import { WindowSize } from '../../../../shared/enums/window-size.enum';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit, AfterViewInit, OnChanges {
	public windowSizeService = inject(WindowSizeService);
	public WindowSize = WindowSize;
	private usersService = inject(UserService);

	@Input() filter!: any;
	@ViewChild("topPaginator") topPaginator!: MatPaginator;
	@ViewChild("bottomPaginator") bottomPaginator!: MatPaginator;

	public Status = Status;

	public dataSource = new MatTableDataSource<IUser, MatPaginator>();
	public selection = new SelectionModel<IUser>(true, []);
	public displayedColumns: string[] = ['action', 'login', 'email', 'phone', 'role', 'dateModifiedAt', 'dateCreatedAt', 'status', 'hasSignature'];

	public ngOnInit() {
		this.dataSource.data = this.usersService.getUsers();
	}

	public ngAfterViewInit() {
		this.dataSource.paginator = this.topPaginator;
		this.bottomPaginator.page.subscribe(event => this.syncPrimaryPaginator(event));
	}
	  
	public ngOnChanges(): void {
		if (this.filter) {
		  	this.applyTableFilter();
		}
	}

	public applyTableFilter(): void {
		this.dataSource.filterPredicate = (data: IUser, filter: string) => {
			const parsedFilter = JSON.parse(filter);
			return (!parsedFilter.login || data.login.includes(parsedFilter.login)) &&
					(!parsedFilter.email || data.email.includes(parsedFilter.email)) &&
					(!parsedFilter.phone || data.phone.includes(parsedFilter.phone)) &&
					(!parsedFilter.role || data.role === parsedFilter.role) &&
					(!parsedFilter.status || data.status === parsedFilter.status);
		};
		this.dataSource.filter = JSON.stringify(this.filter);
	}

	public syncPrimaryPaginator(event: PageEvent) {
		this.topPaginator.pageIndex = event.pageIndex;
		this.topPaginator.pageSize = event.pageSize;
		this.topPaginator.page.emit(event);
	}

	public toggleAllRows() {
		if (this.selection.selected.length !== this.dataSource.data.length && this.selection.selected.length > 0) {
			this.selection.clear();
			return;
		}

		if (!this.isAllSelected()) {
			this.selection.select(...this.dataSource.data);
		} else {
			this.selection.clear();
		}
	}

	public isAllSelected(): boolean {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}
	
	public toggleRow(row: IUser): void {
		this.selection.toggle(row);
	}
}
