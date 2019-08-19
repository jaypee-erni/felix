import { Action } from '@ngrx/store';
import { StateUserListModel } from '../../../shared/models/state-management/users/user-list.model';

// Section 2
export const ADD_USER       = '[USER] Add';
export const REMOVE_USER    = '[USER] Remove';

// Section 3
export class AddUser implements Action {
    readonly type = ADD_USER;

    constructor(public payload: StateUserListModel) {}
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER;

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddUser | RemoveUser;
