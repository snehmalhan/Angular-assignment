import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
    providedIn: 'root',
    // useClass: HttpClient,
})

export class HttpManagerService {
    // Resolve HTTP using the constructor
    constructor(private http: HttpClient) { }

    get(url: string): Observable<any> {
        return this.http.get(url, httpOptions)
    }

    post(url: string, body: Object, customHeader?: any): Observable<any> {
        return this.http.post(
            url,
            body,
            customHeader ? customHeader : httpOptions
        );
    }

    put(url: string, body: Object): Observable<any> {
        return this.http.put(url, body, httpOptions);
    }

    delete(url: string,payload?: any): Observable<any> {
        return this.http.delete(url, {
            headers:new HttpHeaders({ 'Content-Type': 'application/json' }),
            body:payload
        });
    }
  
}
