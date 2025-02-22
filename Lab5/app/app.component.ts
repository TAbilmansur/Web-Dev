import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  ClickFunction(id:string): void
  {
    const targetElement = document.getElementById(id);
    if (targetElement)
    {
      if (targetElement.style.display == "block")
      {
        targetElement.style.display = "none";
        return;
      }
    }
    let ids = ["chairs","mice","wardrobes","YandexStations"];
    for (let idtemp of ids) {
      const element = document.getElementById(idtemp);
      if (element) {
        element.style.display = "none";
      }
    }
    if (targetElement) {
      targetElement.style.display = "block";
    }
  }
}
