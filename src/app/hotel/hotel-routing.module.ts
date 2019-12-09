import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { HotelResolver } from './hotel-resolver.service';

const routes: Routes = [
  {
    path: ':slug',
    component: HotelComponent,
    resolve: {
      hotel: HotelResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {}
