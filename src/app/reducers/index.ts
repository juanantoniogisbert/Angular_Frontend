import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { Office } from '../core/models/office.model';
import * as fromOffices from './offices';

export interface State {
	offices: Office[];
}

export const reducers: ActionReducerMap<State> = {
	offices: fromOffices.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
