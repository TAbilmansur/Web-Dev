import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) {}
  
  fetchJson(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  storage = 'http://localhost:3000/storage';

  updateData(albumId:string,title:string): Observable<any>{
    return this.http.put<any>(this.storage,{'title':title,'id':albumId});
  }

  getData(albumId:string): Observable<any>{
    return this.http.get<any>(this.storage+'/'+albumId);
  }

  deleteAlbum(albumId:string): Observable<any>
  {
    //console.log('http://localhost:3000/albums/'+albumId);
    return this.http.delete('http://localhost:3000/albums/'+albumId);
  }

  addAlbum(title:string): Observable<any>
  {
    return this.http.post<any>(this.storage,{'title':title});
  }
}
