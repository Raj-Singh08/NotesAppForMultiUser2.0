import { NgModule } from "@angular/core";
import 'zone.js';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, User],    // we add all the compmenet here , which needs to know about each other, or which interact with each other
    bootstrap: [AppComponent],

    imports: [BrowserModule,SharedModule,TasksModule]        //If standalone is true in these component then add them in imports, other wise in declartion
    //No need to add DatePipe , as BrowserModule has all.and browserModule can only be inculded in root module
})
export class AppModule { }