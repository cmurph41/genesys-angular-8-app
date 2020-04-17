import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(public httpClient: HttpClient ) { }

  public getStory(id: number): Observable<any> {
    return this.httpClient.get(environment.getStoryByIdApiUrl + id + '.json');
  }
  public getContent(): Observable<any> {
    return this.httpClient.get(environment.newStoriesApiUrl);
  }
}
