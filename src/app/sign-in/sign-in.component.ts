import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenService } from '../_services/token.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { GetCurrentAuth, Login } from '../store/actions';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState} from '../store/reducers';
import { getAuthUserSelector, getIsAuthenticated } from '../store/reducers/auth.reducer';
// import { getAuthUserSelector } from '../store/reducers';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {



  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router,
    private readonly dispatcher: Actions,
    private store: Store<AppState>,
  ) {
    this.initialState();
  }

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),
    rememberMe: new FormControl(false)
  });
  ngOnInit(): void { }
  onLogin(): void {
    if (this.signInForm.valid) {
      const dto = { email: this.signInForm.value.email, password: this.signInForm.value.password };
      this.store.dispatch(Login({ payload: dto }));
    }
  }

  private initialState(): void {
    this.store.select(getIsAuthenticated).subscribe(isAuthenticated => {
      console.log('User data:', isAuthenticated);
      if (isAuthenticated === true) {
        this.store.dispatch(GetCurrentAuth());
        this.store.select(getAuthUserSelector).subscribe(user => {
          console.log('User data:', user);
          this.router.navigate(['/user']);
        });
      }
    });

  }

}
