import { Component, OnInit } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Name } from './name.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  names: Name[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.listName();
  }

  listName() {
    return this.http
      .get<any>('http://localhost:3000/api/people')
      .subscribe((data) => {
        console.log(data);
        this.names = data;
      });
  }
}
