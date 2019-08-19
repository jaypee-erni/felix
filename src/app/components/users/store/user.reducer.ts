import { Action } from '@ngrx/store';
import { StateUserListModel } from '../../../shared/models/state-management/users/user-list.model';
import * as UserActions from './user.action';

// Section 1
const initialState: StateUserListModel = {
    id: null,
    name: null,
    username: null,
    email: null,
};

// Section 2
export function reducer(state: StateUserListModel[] = [initialState], action: UserActions.Actions) {

    // Section 3
    switch (action.type) {
        case UserActions.ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}
