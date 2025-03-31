import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NgFor } from '@angular/common';
import { Service } from './Service';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from "./product-list/product-item/product-item.component";
@Component({
  selector: 'app-root',
  imports: [HttpClientModule, RouterOutlet, ProductListComponent, NgFor, ProductItemComponent],
  providers:[Service],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: string[] = []
  indices: number[] = []
  constructor(private service: Service) {}
  ngOnInit(): void
  {
    this.service.GetCategories().subscribe(
      (data)=>
      {
        for (let i = 0;i<data.length;i++)
        {
          this.categories.push(data[i]['name'])
          this.indices.push(i)
        }
      }
    )
  }
  ClickFunction(id:string): void
  {
    console.log(id);
    const targetElement = document.getElementById(id);
    if (targetElement)
    {
      if (targetElement.style.display == "block")
      {
        targetElement.style.display = "none";
        return;
      }
    }
    for (let idtemp of this.categories) {
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
