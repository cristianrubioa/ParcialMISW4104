import { Routes } from '@angular/router';
import { CafesComponent } from './cafes/cafes.component';


export const routes: Routes = [
    { path: '', redirectTo: '/cafes', pathMatch: 'full' },
    { path: 'cafes', component: CafesComponent },
];
