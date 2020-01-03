import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';

@NgModule({
  declarations: [OfficesComponent],
  imports: [
    SharedModule,
    OfficesRoutingModule
  ],
})
export class OfficesModule { }
