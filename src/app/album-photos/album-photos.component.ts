import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../JSONService';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  imports: [HttpClientModule, CommonModule],
  providers:[JsonService],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  id:number = 0;
  jsonArray:string[][] = []
  constructor(private route: ActivatedRoute,private jsonService: JsonService) {};
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam != null)
      {
        this.id = parseInt(idParam);
      }
    });
    const jsonFileUrl = 'https://jsonplaceholder.typicode.com/albums/'+this.id+'/photos';
    this.jsonService.fetchJson(jsonFileUrl).subscribe(
      (data) => {
        console.log(data.length);
        for (let i = 0;i<data.length;i++)
        {
          this.jsonArray.push([data[i]['title'],data[i]['thumbnailUrl'].replace('via.placeholder','dummyimage')]);
        }
      }
    );
  }
}
