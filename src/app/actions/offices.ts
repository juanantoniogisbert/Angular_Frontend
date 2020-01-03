import { Action } from '@ngrx/store';
import { Office } from '../core/models/office.model';

export const OFFICEUPDATE = '[Office] UpdateAll';
export const OFFICEUPDATED = '[Office] UpdatedAll';

export class OfficesUpdateAction implements Action {
    type = OFFICEUPDATE;
}

export class OfficesUpdatedAction implements Action {
    type = OFFICEUPDATED;

    constructor(public payload: Office[]) {}
}