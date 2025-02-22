import { Component , Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() ItemsString:string[] = [];
  items:[string,string,string,number,string,number][] = [];
  ngOnInit()
  {
    for (let item of this.ItemsString)
    {
      let splitted = item.split('~');
      this.items.push([splitted[0],splitted[1],splitted[2],Number(splitted[3]),splitted[4],Number(splitted[5])]);
    }
  }
}
