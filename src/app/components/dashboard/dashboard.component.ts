import { Component, Inject, OnInit } from '@angular/core';
import { Notyf } from 'notyf';
import { ProductService } from 'src/app/services/other-services/product.service';
import { NOTYF } from 'src/app/utility/notyf.token';

interface User {
  testName: string;
  testTeam: string;
  email: string;
  salesPerson: string;
  contactNumber: string;
  profileImage: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private productService: ProductService,
    @Inject(NOTYF) private notyf: Notyf,
  ) { }

  ngOnInit(): void {
     this.fetchUserData();
  }

  fetchUserData() {
    // this.spinner.show();
    let payload = {
      userId: 'email',
    }
    this.productService.getUserProfile(payload).subscribe({
      next: (res)=>{
        console.log(res);
        this.user= res;
      },
      error: (err)=>{
          if (err.status == 400) {
            let notif_error = err.error.message.toString();
            this.notyf.error({
              message: notif_error,
            })
          } else {
            this.notyf.error({
              message: `Some error occured`,
            });
          }
      }

      });
    }




      // this.spinner.hide();

   
}
