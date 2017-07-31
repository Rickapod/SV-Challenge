import { Action } from '@ngrx/store';

export interface State {
  displayAlert: boolean;
}

const initialState: State = {
  displayAlert: false,
}

export function AlertReducer(state = initialState, action) {
  switch (action.type) {
    case "FAILED_LOGIN":
      return Object.assign({}, state, {displayAlert: action.payload});

    default:
      return state;
  }
}