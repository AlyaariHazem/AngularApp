import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HazemComponentComponent } from "./hazem-component/hazem-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HazemComponentComponent]
})
export class AppComponent {
  title = 'HazemAngular1';
}
