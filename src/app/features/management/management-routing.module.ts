import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserCardComponent } from "./user-card/user-card.component";

export const routes: Routes = [
	{ path: '', component: UserCardComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ManagementRoutingModule {}