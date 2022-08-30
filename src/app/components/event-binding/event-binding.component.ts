import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  message: string = '';
  msg: string = '';
  info: string = '';

  constructor() {}

  ngOnInit(): void {}

  // Event Binding
  onProductAdd() {
    this.message = 'Item added in Cart';
  }

  onInputClick(event: any) {
    console.log(event.target.value);
  }

  onAddCart(event: any) {
    this.msg = event.target.value + ' added in cart';
  }

  // Template Reference Variable
  onGetInfo(name: any) {
    this.info = name.value;
  }
}
