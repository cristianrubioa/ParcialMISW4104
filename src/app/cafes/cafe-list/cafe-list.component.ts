import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 
  ],
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
    });
  }
}
