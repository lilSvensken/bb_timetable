import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '@common/services/api/auth-api.service';
import { MyCookiesService } from '@common/services/my-cookies.service';
import { SessionService } from '@common/services/session.service';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private authApiService: AuthApiService,
              private router: Router,
              private myCookiesService: MyCookiesService,
              private sessionService: SessionService) {
  }

  ngOnInit(): void {

  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const model = {
        login: this.form.controls.login.value,
        password: this.form.controls.password.value
      };

      this.authApiService.login(model)
        .subscribe(
          v => {
            if (v.token) {
              this.myCookiesService.put('token', v.token);
              this.sessionService.setCurrentUser(v.result);
              this.router.navigate(['auth/search']);
            }
          },
          error =>
            console.log(error));
    }
  }
}