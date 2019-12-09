import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import{
  Hotel
} from '../core';

@Component({
  // selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotel: Hotel;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.hotel = data.hotel[0];
      }
    )
  }
}
