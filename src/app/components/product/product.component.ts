import { Component, Inject } from '@angular/core';
import { Notyf } from 'notyf';
import { ProductService } from 'src/app/services/other-services/product.service';
import { NOTYF } from 'src/app/utility/notyf.token';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productList: any[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private productService: ProductService,
    @Inject(NOTYF) private notyf: Notyf,
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.productService.getProductList({}).subscribe({
      next: (res: any) => {
        console.log(res);
        this.productList = res.products || [];
      },
      error: (err: any) => {
        const msg = err?.error?.message?.toString() || 'Some error occurred';
        this.notyf.error({ message: msg });
      }
    });
  }

  sortByPrice() {
    if (this.sortDirection === 'asc') {
      this.productList.sort((a, b) => a.price - b.price);
      this.sortDirection = 'desc';
    } else {
      this.productList.sort((a, b) => b.price - a.price);
      this.sortDirection = 'asc';
    }
  }
}
