import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@Component({
  standalone: true,
  selector: 'app-cafes',
  imports: [CommonModule, CafeListComponent],
  templateUrl: './cafes.component.html',
})
export class CafesComponent {}