import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users'; // Importing dummy users data

@Component({
  selector: 'app-root',     // This is the root component of the application(Tells that this element needs to be replaced with this component)
  standalone:false,
  templateUrl: './app.html',  // The HTML template for this component
  styleUrl: './app.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId? :string;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId); 
  }

  onSelectUser(id:string){ 
     this.selectedUserId = id; // Update the selected user ID when a user is selected
}
}
