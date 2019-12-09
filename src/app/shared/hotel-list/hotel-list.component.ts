import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../core';
import { Hotel } from '../../core/models/hotel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  hotels: string

  constructor(
    private hotelsService: HotelsService,
    private router: Router
  ) {}

  hotelsList: string

  ngOnInit() {

    this.hotelsService.getAll().subscribe(data => {
      this.hotels = data;
    })
    // this.hotelsService.getSlug(this.hotel.slug)
    // .subscribe(
    //   data => {
    //     this.router.navigateByUrl('/');
    // })
  }
}
