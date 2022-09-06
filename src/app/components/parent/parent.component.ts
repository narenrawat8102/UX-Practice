import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  isProductChoosed: boolean = false;
  productChoosed: string = '';

  itemSentToCart: any;

  constructor() {}

  ngOnInit(): void {}

  onProductSelect(item: any) {
    this.isProductChoosed = true;
    this.productChoosed = item;
  }

  sendToCart(event: any) {
    this.itemSentToCart = event;
  }
}
