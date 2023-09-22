import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { GetCurrentAuth, GetCurrentAuthFailure, GetCurrentAuthSuccess, Login, LoginFailure, LoginSuccess } from '../actions';


export interface State {
  user?: any;
  loading: boolean;
  error: any;
  isAuthenticated: boolean;
}

export const initialState: State = {
  user: undefined,
  loading: false,
  error: {
    error: '',
    message: '',
    details: '',
    statusCode: 0,
  },
  isAuthenticated: false,
};

const authReducer = createReducer(
  initialState,
  on(Login, (state) => {
    return { ...state, loading: true };
  }),
  on(LoginSuccess, (state, { payload }) => {
    return { ...state, loading: false, isAuthenticated: true };
  }),
  on(LoginFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  }),
  on(GetCurrentAuth, (state) => {
    return { ...state, loading: false};
  }),
  on(GetCurrentAuthSuccess, (state, { user }) => {
    return { ...state, loading: false, user };
  }),
  on(GetCurrentAuthFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  })
);

export function reducer(state: State | undefined, action: Action): State {
  return authReducer(state, action);
}

export const AuthFeatureKey = 'auth';

const userState = createFeatureSelector<State>(AuthFeatureKey);

export const getAuthLoading = createSelector(
  userState,
  (state) => state.loading
);

export const getAuthError = createSelector(userState, (state) => state.error);
export const getIsAuthenticated = createSelector(userState, (state) => state.isAuthenticated);
export const getAuthUserSelector = createSelector(
  userState,
  (state) => state.user
);
