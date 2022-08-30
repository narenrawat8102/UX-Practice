import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  selectedProduct: string = '';

  constructor() {}

  ngOnInit(): void {}

  getProductValue(proValue: any) {
    // console.log(proValue.target.value);
    this.selectedProduct = proValue.target.value;
  }
}
