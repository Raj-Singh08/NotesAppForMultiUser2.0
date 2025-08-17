import { NgModule } from "@angular/core";
import { Card } from "./card/card";

@NgModule({
    declarations:[Card],
    exports:[Card]
    //Bootstarp will be only in app
})
export class SharedModule{

}