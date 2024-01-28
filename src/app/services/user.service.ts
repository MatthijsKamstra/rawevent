import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Api } from '../shared/config/api';
import { IDatabase } from '../shared/interfaces/i-fakedatabase';
import { IUser } from '../shared/interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  db?: IDatabase;

  constructor(private http: HttpClient) { }

  public getDB(id: string): Observable<IDatabase> {
    const url = Api.getUrl().users(id);
    let observable = this.http.get<IDatabase>(url);
    return observable;
  }

  public getUserById(id: string): Observable<IUser> {
    return this.getDB(id).pipe(
      map((database) => database.fakedatabase[id])
    );
  }

}
