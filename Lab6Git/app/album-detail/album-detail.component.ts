import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  imports: [],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  id:number = 0;
  title:string = "";
  performer:string = "";
  genre:string = "";
  date:string = "";
  infos = ['Сектор Газа','Кащей Бессмертный','The Wall'];
  performers = ['Сектор Газа','Сектор Газа','Pink Floyd'];
  genres = ['поп-рок, панк-рок, Хард-рок','Альтернативный рок, поп-рок, рок-опера, камеди-рок, хоррор-панк','Прогрессивный рок, арт-рок, прогрессивный поп'];
  dates = ['декабрь 1997 года','июнь 1994 года','30 ноября 1979 года'];
  constructor(private route: ActivatedRoute) {};
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam != null)
      {
        this.id = parseInt(idParam);
      }
    });
    for (let i = 0;i<3;i++)
    {
      if (localStorage.getItem(i.toString()) == null)
      {
        localStorage.setItem(i.toString(),this.infos[i]);
      }
    }
    const tmpTitle = localStorage.getItem(this.id.toString());
    if (tmpTitle != null)
    {
      this.title = tmpTitle;
    }
    this.performer = this.performers[this.id];
    this.genre = this.genres[this.id];
    this.date = this.dates[this.id];
  }
  setTitle(): void
  {
    const input: HTMLInputElement|null = document.getElementById("Input_title") as HTMLInputElement;
    if (input != null)
    {
      localStorage.setItem(this.id.toString(),input.value);
    }
  };
}
