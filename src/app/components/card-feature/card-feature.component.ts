import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-feature',
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.css']
})
export class CardFeatureComponent implements OnInit {
  @Input() feature: any;
  constructor() { }

  ngOnInit(): void {
  }

}
