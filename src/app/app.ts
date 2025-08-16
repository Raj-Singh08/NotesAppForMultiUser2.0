import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Importing the HeaderComponent
import { User } from './user/user'; // Importing the User component
import { DUMMY_USERS } from './dummy-users'; // Importing dummy users data
import { Tasks } from './tasks/tasks'; // Importing the Tasks component

@Component({
  selector: 'app-root',     // This is the root component of the application(Tells that this element needs to be replaced with this component)
  standalone: true,        // Indicates that this component is a standalone component
  imports: [HeaderComponent,User,Tasks], // Importing the HeaderComponent to use it in this component
  templateUrl: './app.html',  // The HTML template for this component
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId? :string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId); 
  }

  onSelectUser(id:string){ 
     this.selectedUserId = id; // Update the selected user ID when a user is selected
}
}
