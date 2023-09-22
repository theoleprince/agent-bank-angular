import { createAction, props } from '@ngrx/store';

export const Login = createAction(
  '[Auth] Login',
  props<{ payload: any }>()
);

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ payload: any }>()
);

export const LoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const GetCurrentAuth = createAction('[Auth] Get current user');

export const GetCurrentAuthSuccess = createAction(
  '[Auth] Get current user success',
  props<{ user: any }>()
);

export const GetCurrentAuthFailure = createAction(
  '[Auth] Get current user failure',
  props<{ error: any }>()
);
