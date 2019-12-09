import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { HotelsService } from '../core';
import { catchError } from 'rxjs/operators';
import { Hotel } from '../core/models/hotel.model';

@Injectable()
export class HotelResolver implements Resolve<Hotel> {
  constructor(
    private hotelsService: HotelsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.hotelsService.getSlug(route.params['slug'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
