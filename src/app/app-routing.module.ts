import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	// { path: '', redirectTo: 'management', pathMatch: 'full' },
	{ path: 'management', loadChildren: () => import('./features/management/management.module').then(m => m.ManagementModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}