import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private routes: Router
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      description: ['', Validators.required],
      unity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.form.disable();
    this.service.deleteProduct(this.form.value)
      .subscribe(
        (res: any) => {
          this.form.enable();
          this.routes.navigate(['/']);
        }
      )
  }

  getProduct(id) {
    this.form.controls.id.disable();
    this.service.getProduct(id)
      .subscribe(
        (res: Product) => {
          this.form.patchValue(res);
          this.form.controls.id.enable();
        },
        (err: any) => {
          this.form.controls.description.setValue('');
          this.form.controls.unity.setValue('');
          this.form.controls.price.setValue('');
          this.form.controls.id.enable();
        }
      )
  }

  clear() {
    this.form.reset();
  }

}
