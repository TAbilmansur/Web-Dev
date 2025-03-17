import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../JSONService';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-albums',
  imports: [HttpClientModule,CommonModule],
  providers:[JsonService],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  jsonArray: string[][] = [];
  constructor(private jsonService: JsonService) {}
  
  ngOnInit(): void {
    const jsonFileUrl = 'http://localhost:3000/albums';
    this.jsonService.fetchJson(jsonFileUrl).subscribe(
      (data) => {
        for (let i = 0;i<data.length;i++)
        {
          this.jsonArray[i] = [data[i]['id'],data[i]['title']];
        }
      }
    );
  }
  DeleteAlbum(albumId:string)
  {
    this.jsonService.deleteAlbum(albumId).subscribe(
      (error)=>
      {
        console.log(error);
      }
    );
  }
  NewAlbum()
  {
    let Title = (document.getElementById('NewAlbumInput') as HTMLInputElement).value;
    this.jsonService.addAlbum(Title).subscribe(
      (data) =>
      {
        this.jsonArray.push([data.id,data.title]);
        console.log(data);
      }
    )
  }
}
