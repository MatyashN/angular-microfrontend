import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users/users.service';
import { User } from "@@models";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  constructor(private readonly usersService: UsersService) {}
  addUser(form: NgForm) {
    const user: User = form.value;
    this.usersService.addUser(user);
    form.resetForm();
  }
}