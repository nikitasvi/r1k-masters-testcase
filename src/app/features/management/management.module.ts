import { NgModule } from "@angular/core";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { ManagementRoutingModule } from "./management-routing.module";
import { MaterialModule } from "../../shared/modules/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxMaskDirective, provideEnvironmentNgxMask } from "ngx-mask";
import { UsersFilterComponent } from "./components/users-filter/users-filter.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserService } from "./services/user.service";

@NgModule({
	imports: [
		MaterialModule,
		ManagementRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		NgxMaskDirective,
	],
	exports: [
		UserCardComponent
	],
	providers: [
		provideEnvironmentNgxMask(),
		UserService
	],
	declarations: [
		UserCardComponent,
		UsersFilterComponent,
		UsersListComponent
	],
})
export class ManagementModule {}