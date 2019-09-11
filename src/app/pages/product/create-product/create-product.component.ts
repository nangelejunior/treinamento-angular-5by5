import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private routes: Router
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      unity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.form.disable();
    this.service.salveProduct(this.form.value)
      .subscribe(
        (res: any) => {
          this.form.enable();
          this.routes.navigate(['/']);
        }
      )
  }

  clear() {
    this.form.reset();
  }

}
