import { createAction, props } from '@ngrx/store';

export const CreateProfileUser = createAction(
  '[Profile] Create Profile user',
  props<{ payload: any }>()
);

export const CreateProfileSuccess = createAction(
  '[Profile] Create Profile user',
  props<{ payload: any }>()
);
export const CreateProfileFailure = createAction(
  '[Profile] Create Profile user',
  props<{ error?: any }>()
);
