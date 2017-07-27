import { Action } from '@ngrx/store';

export interface State {
  user: object;
}

const initialState: State = {
  user: {},
}

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}