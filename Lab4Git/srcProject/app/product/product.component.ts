import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() source:string = "";
  @Input() name:string = "";
  @Input() description:string = "";
  @Input() rating:number = 0;
  @Input() kaspiLink:string = "";
  @Input() price:number = 0;
}
