import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() INPUT:[string,number,string,number,boolean] = ['',0,'',0,false]
  name:string = "";
  price:number = 0;
  description:string = "";
  count:number = 0;
  is_active:boolean = true;
  ngOnInit()
  {
    this.name = this.INPUT[0];
    this.price = this.INPUT[1];
    this.description = this.INPUT[2];
    this.count = this.INPUT[3];
    this.is_active = this.INPUT[4];
  }
}
