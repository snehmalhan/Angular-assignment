import { Component, Inject } from '@angular/core';
import { Notyf } from 'notyf';
import { ProductService } from 'src/app/services/other-services/product.service';
import { NOTYF } from 'src/app/utility/notyf.token';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userList: any[] = [];        // Full list
  filteredUserList: any[] = []; // Filtered list to display
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    @Inject(NOTYF) private notyf: Notyf,
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    let payload = {
      // userId: 'email',
    }
    this.productService.getUserList(payload).subscribe({
      next: (res) => {
        console.log(res);
        this.userList = res.users || [];
        this.filteredUserList = [...this.userList];  // initialize filtered list
      },
      error: (err) => {
        if (err.status == 400) {
          let notif_error = err.error.message.toString();
          this.notyf.error({
            message: notif_error,
          })
        } else {
          this.notyf.error({
            message: `Some error occurred`,
          });
        }
      }
    });
  }

  filterUsers() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.filteredUserList = [...this.userList];
      return;
    }
    this.filteredUserList = this.userList.filter(user => {
      const fullName = `${user?.firstName || ''} ${user?.lastName || ''}`.toLowerCase();
      return fullName.includes(query);
    });
  }

  editUser(user: any) {
    // your existing code or logic
  }

  viewDetails(data: any) {
    // your existing code or logic
  }
}
