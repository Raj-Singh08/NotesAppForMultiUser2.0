import { Component } from "@angular/core"; // This import is necessary to create an Angular component

@Component({    // This decorator defines the metadata for the component
    selector: 'app-header', 
    templateUrl: './header.component.html', // The HTML template for this component
    styleUrl: './header.component.css' // The CSS styles for this component
}
)

export class HeaderComponent {} 