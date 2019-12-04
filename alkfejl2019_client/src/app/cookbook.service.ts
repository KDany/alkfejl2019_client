import { Injectable } from '@angular/core';
import { Cookbook } from "./cookbook";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService, httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  
  private cookbookUrl: string = 'http://localhost:8080/cookbook';

  constructor(
    private http: HttpClient,
    private authService: AuthService 
  ) { }

  getCookbooks(): Promise<Cookbook[]> {
    return this.http.get<Cookbook[]>(`${this.cookbookUrl}`, httpOptions).toPromise();
  }

  getCookbook(id: number): Promise<Cookbook> {
    return this.http.get<Cookbook>(`${this.cookbookUrl}/${id}`, httpOptions).toPromise();
  }

  createCookbook(cookbook: Cookbook): Promise<Cookbook> {
    return this.http.post<Cookbook>(`${this.cookbookUrl}`, cookbook, httpOptions).toPromise();
  }

  updateCookbook(cookbook: Cookbook): Promise<Cookbook> {
    return this.http.put<Cookbook>(`${this.cookbookUrl}/${cookbook.id}`, cookbook, httpOptions).toPromise();
  }

  deleteCookbook(id): Promise<Cookbook> {
    return this.http.delete<Cookbook>(`${this.cookbookUrl}/${id}`, httpOptions).toPromise();
  }
}