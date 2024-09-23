import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/angular-material.module";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
	imports: [
		MaterialModule,
	],
	exports: [
		MaterialModule,
		HeaderComponent
	],
	declarations: [
		HeaderComponent
	]
})
export class SharedModule {}