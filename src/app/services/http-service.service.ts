import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import  {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private _http: HttpClient) { }

  postData(data):Observable <any>{

    let url = "https://appoinment.herokuapp.com/book_appointment"; //"http://localhost:3000/book_appointment";
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };
    
    return this._http.post(url, data, httpOptions).pipe(res => {
       
       return res;
    })

  }

  getData(data):Observable <any>{

    let url = "https://appoinment.herokuapp.com/appointments/" + data;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };
    
    return this._http.get(url, httpOptions).pipe(res => {
       
       return res;
    })
  }
}
