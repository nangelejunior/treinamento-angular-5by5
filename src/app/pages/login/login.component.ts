import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { UserUtil } from 'src/app/utils/user.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private routes: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ])]
    });
  }

  ngOnInit() {
    const user = UserUtil.getUser();
    if (user) {
      this.routes.navigate(['']);
    }
  }

  submit() {
    this.service.authenticate(this.form.value)
      .subscribe((res: any) => {
        UserUtil.setUser(res);
        this.routes.navigate(['']);
      });
  }

}
