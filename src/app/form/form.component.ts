import { Component, OnInit } from '@angular/core';
import { FormService} from '../form.service';
import { User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  states = ['NY', 'NJ', 'PA', 'MA', 'CA', 'FL'];
  user: User = {
    firstName: null,
    lastName: null,
    phone: null,
    address: null,
    city: null,
    state: null,
    zip: null
  };
  constructor(private formService: FormService) {}
  addUser() {
    this.formService.addUser(this.user);
  }
  ngOnInit() {
  }

}
