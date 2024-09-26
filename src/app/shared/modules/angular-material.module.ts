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
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { getPaginatorConfigurationIntl } from '../utils/paginator-configuration';
import { MatSidenavModule } from '@angular/material/sidenav';

const appearance: MatFormFieldDefaultOptions = {
	appearance: 'outline'
};

export const CUSTOM_DATE_FORMATS: MatDateFormats = {
	parse: {
		dateInput: 'DD.MM.YYYY',
	},
	display: {
		dateInput: 'DD.MM.YYYY',
		monthYearLabel: 'MMMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY',
	}
};

//registerLocaleData(localeRu);

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
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatSidenavModule
	],
	providers: [
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      		useValue: appearance
		},
		{
			provide: MAT_DATE_FORMATS, 
			useValue: CUSTOM_DATE_FORMATS
		},
		{
			provide: MAT_DATE_LOCALE, 
			useValue: 'ru-RU'
		},
		{
			provide: MatPaginatorIntl, 
			useValue: getPaginatorConfigurationIntl()
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
		MatDatepickerModule,
		MatNativeDateModule,
		MatSelectModule,
		MatTableModule,
		MatPaginatorModule,
		MatCheckboxModule,
		MatSidenavModule
	]
})
export class MaterialModule {}