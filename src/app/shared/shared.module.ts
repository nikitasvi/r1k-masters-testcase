import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/angular-material.module";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		MaterialModule,
		BrowserModule,
		RouterModule
	],
	exports: [
		MaterialModule,
		HeaderComponent,
		SidebarComponent
	],
	declarations: [
		HeaderComponent,
		SidebarComponent
	]
})
export class SharedModule {}