import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  id:number = 0;
  src:string = "";
  srcs = ['https://avatars.mds.yandex.net/get-entity_search/60958/146498744/SUx104_2x','https://avatars.mds.yandex.net/get-entity_search/68218/116703687/SUx104_2x','https://avatars.mds.yandex.net/get-entity_search/69916/152776117/SUx104_2x'];
  constructor(private route: ActivatedRoute) {};
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam != null)
      {
        this.id = parseInt(idParam);
      }
      this.src = this.srcs[this.id];
    });
  }
}
