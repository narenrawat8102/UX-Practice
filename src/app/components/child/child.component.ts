import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() isProductSelected: boolean = false;
  @Input() product: string = '';

  @Output() itemToSend = new EventEmitter();

  itemAddedToCart: any;

  constructor() {}

  ngOnInit(): void {}

  onAddToCart() {
    this.itemAddedToCart = this.product;
    this.itemToSend.emit(this.itemAddedToCart);
  }
}
