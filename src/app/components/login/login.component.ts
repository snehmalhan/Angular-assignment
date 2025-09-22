import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/login/auth.service';
import { Notyf } from 'notyf';
import { NOTYF } from 'src/app/utility/notyf.token';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    @Inject(NOTYF) private notyf: Notyf,
    public spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit(): void {

    if (this.loginForm.invalid) return;

    if (this.loginForm.valid) {
      this.spinner.show();
      const { username, password } = this.loginForm.value;
      const params = {
        username: username,
        password: password,
      };
      this.authService.login(params)
        .pipe(finalize(() => this.spinner.hide()))
        .subscribe({
        next: (res) => {
          console.log("res>>", res)
          this.authService.saveToken(res.accessToken);
          this.notyf.success('Login Successful!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          //  this.router.navigate(['/dashboard']);
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

  }
}
