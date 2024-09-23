import { NgModule } from "@angular/core";
import { UserCardComponent } from "./user-card/user-card.component";
import { ManagementRoutingModule } from "./management-routing.module";
import { MaterialModule } from "../../shared/modules/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [
		MaterialModule,
		ManagementRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports: [
		UserCardComponent
	],
	declarations: [
		UserCardComponent
	],
})
export class ManagementModule {}