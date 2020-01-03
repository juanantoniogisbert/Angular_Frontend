import * as offices from '../actions/offices';

export function reducer(state: [], action: offices.OfficesUpdatedAction) {
    switch (action.type) {
        case offices.OFFICEUPDATED:
            console.log('reducer offices.OFFICEUPDATED');
            return action.payload;
        default:
            console.log('reducer default');
            return state;
    }
}