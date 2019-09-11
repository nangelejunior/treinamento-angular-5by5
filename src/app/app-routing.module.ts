import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { EditProductComponent } from './pages/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './pages/product/delete-product/delete-product.component';
import { MasterComponent } from './pages/master/master.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: MasterComponent,
    children: [
      { path: '', component: ListProductComponent },
      { path: 'create', component: CreateProductComponent },
      { path: 'edit', canActivate: [ManagerGuard], component: EditProductComponent },
      { path: 'delete', canActivate: [ManagerGuard], component: DeleteProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
