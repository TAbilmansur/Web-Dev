import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../JSONService';
import { HttpClientModule } from '@angular/common/http';
import { InputType } from 'node:zlib';
@Component({
  selector: 'app-album-detail',
  imports: [HttpClientModule],
  providers:[JsonService],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  id:number = 0;
  title:string = "";
  constructor(private route: ActivatedRoute, private jsonService: JsonService) {};
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam != null)
      {
        this.id = parseInt(idParam);
      }
    });
    const jsonFileUrl = 'https://jsonplaceholder.typicode.com/albums/'+this.id;
    this.RestoreTitle();
  }
  SaveTitle(): void{
    let InputTitle = document.getElementById('InputTitle') as HTMLInputElement;
    if (InputTitle != null)
    {
      console.log("WORKED");
      this.jsonService.updateData(this.id.toString(),InputTitle.value).subscribe(
        response => {
          console.log('Response from server:', response);
        },
        error => {
          console.error('Error:', error);
        }
      );
    } 
  }
  RestoreTitle(): void{
    this.jsonService.getData(this.id.toString()).subscribe(
      (data) =>
      {
        console.log(data.title);
        this.title = data.title;
      }
    )
  }
}
