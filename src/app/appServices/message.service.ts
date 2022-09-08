import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  products = [
    { name: 'Laptop', id: '001' },
    { name: 'Mobile', id: '002' },
    { name: 'Television', id: '003' },
    { name: 'Washing Machine', id: '004' },
  ];

  users(): Observable<any> {
    return this.http.get(this.url);
  }
}
