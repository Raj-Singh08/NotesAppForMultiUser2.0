import { Component ,Input, input, Output, EventEmitter, signal , computed , output} from '@angular/core';
import {type UserType } from './user.model'

// type UserType = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input ({required:true}) selected!:boolean;
  @Input({required: true}) user!:UserType;

  // @Input({required: true}) id: string | undefined; 
  //  @Input({required: true}) avatar!: string; //Input decorator use is to pass data from parent component to child component
  //  @Input({required: true}) name!: string;
  // avatar = input.required<string>();
  // name = input.required<string>();    //readonly input properties and connot be changed by the child component , create inputSignal for each input property
  


  @Output() select = new EventEmitter<string>(); 
// In user.html:
// The button calls onSelectUser() when clicked.
// In user.ts:
// onSelectUser() emits the select event with the user's id.
// In app.html:
// The (select) event on <app-user> calls onSelectUser($event) in the parent.
// In app.ts:
// onSelectUser(id: string) logs the selected user ID.


  //select = output<string>();    // underthe hood, this is an EventEmitter<string> that emits the user's id when selected


   get imagePath() {
     return `assets/users/${this.user.avatar}`;
   }

  //imagePath = computed(() => `assets/users/${this.avatar()}`);  //we always read signal values using the function call syntax, like this: signalName()

  onSelectUser() {
    this.select.emit(this.user.id); // Emit the select event when the user is selected

    //Just for demonstration, randomly select a user from DUMMY_USERS
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]); // Update the selected user using signal
    // //this.selectedUser = DUMMY_USERS[randomIndex]; 
  }
}
 