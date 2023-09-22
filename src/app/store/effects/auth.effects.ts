import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { GetCurrentAuth, GetCurrentAuthFailure, GetCurrentAuthSuccess, Login, LoginFailure, LoginSuccess } from '../actions';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';


@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login),
      mergeMap((action) =>
        this.authService.login(action.payload).pipe(
          switchMap((payload: any) => {
            this.localStorageService.saveToken(payload.body.token);
            return [GetCurrentAuth(), LoginSuccess({ payload })];
          }),
          catchError((err: HttpErrorResponse) => of(LoginFailure(err)))
        )
      )
    )
  );

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCurrentAuth),
      mergeMap((action) => {
        return this.authService.getUserProfile(this.localStorageService.getToken()).pipe(
          switchMap((payload: any) => {
            this.localStorageService.saveUser(payload.body);
            return [GetCurrentAuthSuccess({ user: payload.body })];
          }),
          catchError((err: HttpErrorResponse) =>
            of(GetCurrentAuthFailure(err.error))
          )
        );
      })
    )
  );


  constructor(
    private actions$: Actions,
    private authService: UserService,
    private localStorageService: TokenService
  ) {}
}
