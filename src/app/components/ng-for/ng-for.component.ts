import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  products = [
    {
      id: 'p1',
      image: 'assets/ngFor-images/mobile.jpeg',
      name: 'Mobile',
      price: '20000',
    },
    {
      id: 'p2',
      image: 'assets/ngFor-images/laptop.jpg',
      name: 'Laptop',
      price: '30000',
    },
    {
      id: 'p3',
      image: 'assets/ngFor-images/tv.jpeg',
      name: 'Television',
      price: '15000',
    },
    {
      id: 'p4',
      image: 'assets/ngFor-images/wm.jpeg',
      name: 'Washing Machine',
      price: '12000',
    },
  ];

  users = [{ id: '01', name: 'Naren' }];

  constructor() {}

  ngOnInit(): void {}

  onAddUser(user: any) {
    this.users.push({
      id: '02',
      name: user.value,
    });
  }

  onRemoveUser() {
    this.users.splice(this.users.length - 1);
  }

  onDeleteUser(id: number) {
    console.log(id + 1);
    this.users.splice(id, 1);
  }
}
