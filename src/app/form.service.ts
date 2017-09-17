import { Injectable } from '@angular/core';
import {User} from './user';


@Injectable()
export class FormService {
  allUsers: User[] = [];
  addUser(userNew): void {
    this.allUsers.push(userNew);
    console.log(this.allUsers);
  }
  constructor() { }

}
