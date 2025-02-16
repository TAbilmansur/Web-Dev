import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import { Example2Component } from "./example2/example2.component";
import { Example3Component} from "./example3/example3.component";
import { Example4Component } from "./example4/example4.component";
import { Example5Component } from "./example5/example5.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExampleComponent, Example2Component, Example3Component, Example4Component, Example5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
