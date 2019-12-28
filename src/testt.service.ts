import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {log} from 'util';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TesttService {
  private Url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient, private location: Location) {
  }


  gett(): Observable<string> {
    let headersList = new HttpHeaders();
    headersList = headersList.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.Url, {headers: headersList, responseType: 'text'});
  }

  postt(): Observable<any> {

    const obj = {name: 'John'};

    console.log('benjos');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return this.http.post<string>(this.Url + 'ugasi', JSON.stringify(obj), {headers: httpHeaders, responseType: 'json'});
  }

}

