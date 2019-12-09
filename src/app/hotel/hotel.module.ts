import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { SharedModule } from '../shared';
import { HotelResolver } from './hotel-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    HotelRoutingModule
  ],
  declarations: [
    HotelComponent
  ],
  providers: [
    HotelResolver
  ]
})
export class HotelModule { }
