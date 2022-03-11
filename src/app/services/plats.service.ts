import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  private readonly _URL = "http://localhost:3000/plats/";

  constructor(private client: HttpClient) { }

  getAllPlats(){
    return this.client.get<Plat[]>(this._URL);
  }

  getPlat(id: number){
    return this.client.get<Plat>(this._URL+id);
  }

  postPlat(plat: Plat){
    return this.client.post<Plat>(this._URL, plat);
  }
}
