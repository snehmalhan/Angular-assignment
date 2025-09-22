import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpManagerService } from 'src/app/http-manager/http-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpManager: HttpManagerService) { }

  getUserProfile(payload: any): Observable<any> {
      let apiUrl = 'https://dummyjson.com/auth/me';
    let append = `?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}&userId=${payload.userId}`;
    return this.httpManager.get(apiUrl)
  }

    getUserList(payload: any): Observable<any> {
      let apiUrl = 'https://dummyjson.com/users';
    // let append = `?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}`;
    return this.httpManager.get(apiUrl)
  }

    getProductList(payload: any): Observable<any> {
      let apiUrl = 'https://dummyjson.com/products';
    // let append = `?pageIndex=${payload.pageIndex}&pageSize=${payload.pageSize}`;
    return this.httpManager.get(apiUrl)
  }
}
