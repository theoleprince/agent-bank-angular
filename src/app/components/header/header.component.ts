import { Component, OnInit } from '@angular/core';
import { GetCurrentAuth } from 'src/app/store/actions';
import { getAuthUserSelector } from 'src/app/store/reducers/auth.reducer';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { TokenService } from 'src/app/_services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  isAuthenticated: any;
  constructor(
    private store: Store<AppState>,
    private localStorageService: TokenService,
    private router: Router
  ) {
    this.initialState();
  }

  ngOnInit(): void {
    this.store.dispatch(GetCurrentAuth());
  }

  private initialState(): void {
    this.isAuthenticated = this.localStorageService.getToken() ? true : false;
    console.log('User data:', this.isAuthenticated);
    if (this.isAuthenticated === true) {
      this.store.select(getAuthUserSelector).subscribe(user => {
        this.user = user;
        console.log('User data:', user);
      });
    }
  }

  logout(): void {
    this.localStorageService.signOut();
    this.router.navigate(['/']);
  }
}
