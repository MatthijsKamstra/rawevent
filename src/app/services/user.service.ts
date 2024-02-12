import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Api } from '../shared/config/api';
import { IDatabase, IFakeDatabase } from '../shared/interfaces/i-fakedatabase';
import { IUser } from '../shared/interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  db?: IDatabase;

  constructor(private http: HttpClient) { }

  public getDB(id: string): Observable<IDatabase> {
    const url = Api.getUrl().userById(id);
    let observable = this.http.get<IDatabase>(url);
    return observable;
  }

  /**
   * in this application it would be a big NO-NO to download all the users,
   * this is only to test the application and illustrate the idea
   */
  public getUsersHack(): Observable<IFakeDatabase> {
    return this.getDB('_').pipe(
      map((database) => database.fakedatabase)
    );
  }

  public getUserById(id: string): Observable<IUser> {
    return this.getDB(id).pipe(
      map((database) => database.fakedatabase[id])
    );
  }

}
