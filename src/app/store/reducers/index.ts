import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import { environment } from 'src/environments/environment';

export interface AppState {
  auth: fromAuth.State;

}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,

};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
