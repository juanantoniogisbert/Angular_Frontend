import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { OfficesUpdateAction } from '../actions/offices';
import * as offices from "../actions/offices";
import { switchMap, map } from 'rxjs/operators';
import { OfficesService } from '../core';

@Injectable()
export class OfficeEffects {
    @Effect()
    update: Observable<Action> = this.actions.pipe(
        ofType(offices.OFFICEUPDATE),
        switchMap(() => {
            var test = this.officeService
                .getAll()
                .pipe(map(data => new offices.OfficesUpdatedAction(data)));
                
            console.log(test);
            
            return test;
        }
        )
    );

    constructor(
        private officeService: OfficesService,
        private actions: Actions
    ) { }
}
