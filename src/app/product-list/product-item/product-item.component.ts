import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() INPUT:[string,string,string,number,string,number] = ["","","",0,"",0];
  source:string = "";
  name:string = "";
  description:string = "";
  rating:number = 0;
  kaspiLink:string = "";
  price:number = 0;
  likes:number = 0;
  ngOnInit()
  {
    this.source = this.INPUT[0];
    this.name = this.INPUT[1];
    this.description = this.INPUT[2];
    this.rating = this.INPUT[3];
    this.kaspiLink = this.INPUT[4];
    this.price = this.INPUT[5];
  }
  Like(): void{
    console.log(this.rating);
    this.likes = this.likes+1;
  }
}
