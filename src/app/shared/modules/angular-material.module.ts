import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';

const appearance: MatFormFieldDefaultOptions = {
	appearance: 'outline'
};

@NgModule({
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule
	],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      		useValue: appearance
		},
		{
			provide: DateAdapter, 
			useClass: NativeDateAdapter
		},
		{
			provide: MAT_DATE_FORMATS, 
			useValue: MAT_NATIVE_DATE_FORMATS
		}
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule
	]
})
export class MaterialModule {}