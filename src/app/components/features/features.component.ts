import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
data = [
    {
        id: 1,
        img: 'assets/img/icon-money.png',
        title: 'You are our #1 priority',
        description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
        id: 2,
        img: 'assets/img/icon-chat.png',
        title: 'More savings means higher rates',
        description: 'The more you save with us, the higher your interest rate will be!'
    },
    {
        id: 3,
        img: 'assets/img/icon-security.png',
        title: 'Security you can trust',
        description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }

];
  constructor() { }

  ngOnInit(): void {
  }

}
