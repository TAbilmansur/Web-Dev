import { Component , Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { Service } from '../Service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product-list',
  providers:[Service],
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private service: Service) {}

  @Input() category:number = 0;
  products:[string,number,string,number,boolean][] = []
  ngOnInit()
  {
    this.service.GetProductsByCategory(this.category.toString()).subscribe
    (
      (data) =>
      {
        for (let i = 0;i<data.length;i++)
        {
          this.products.push([data[i]['name'],data[i]['price'],data[i]['description'],data[i]['count'],data[i]['is_active']])
        }
      }
    )
  }
}
