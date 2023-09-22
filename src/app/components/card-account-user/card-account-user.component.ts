import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-account-user',
  templateUrl: './card-account-user.component.html',
  styleUrls: ['./card-account-user.component.css']
})
export class CardAccountUserComponent implements OnInit {
@Input() account: any;
  constructor() { }

  ngOnInit(): void {
  }

}
