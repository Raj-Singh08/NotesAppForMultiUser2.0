import { NgModule } from "@angular/core";
import 'zone.js';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { Task } from "./tasks/task/task";
import { Tasks } from "./tasks/tasks";
import { User } from "./user/user";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations:[AppComponent],    // we add all the compmenet here , which needs to know about each other, or which interact with each other
    bootstrap:[AppComponent],

    imports:[BrowserModule,User,Tasks,Task,HeaderComponent]        //If standalone is true in these component then add them in imports, other wise in declartion
})
export class AppModule{}