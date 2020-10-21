import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _albumsUrl = '../assets/albums.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) {}

  getAlbum(id: number): Observable<Album> {
    console.log(id);
    return this._http.get(this._albumsUrl).map((response) => <Album[]>response.json()).map(albums => albums.find(album => album.id === id));
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
  }
}
