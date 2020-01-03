import * as offices from '../actions/offices';

export function reducer(state: [], action: offices.OfficesUpdatedAction) {
    switch (action.type) {
        case offices.OFFICEUPDATED:
            return action.payload;        
        default:
            return state;
    }
}