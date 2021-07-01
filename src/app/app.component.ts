import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './services/users.service';
import { Users } from './models/user';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from "primeng/api";


@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers: [MessageService]
})
export class AppComponent {
  title = 'primeNg';
  users = [];
  loading: boolean = true;


  constructor(private userService: UsersService, private primengConfig: PrimeNGConfig ) {}

  ngOnInit() {
        this.getUsers();
        this.loading = false;
    }

    getUsers(){
      this.userService.getUsers().subscribe(
        (response: any) => {
          this.users = response;
          console.log(this.users);
        }
      )
    }

    clear(table: Table) {
      table.clear();
  }
}
