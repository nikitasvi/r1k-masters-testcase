import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ManagementModule } from "./features/management/management.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WindowSizeService } from "./shared/services/widow-sizes.service";
import { MaterialModule } from "./shared/modules/angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule,
		ManagementModule,
		MaterialModule,
		RouterModule
	],
	providers: [
		WindowSizeService
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}