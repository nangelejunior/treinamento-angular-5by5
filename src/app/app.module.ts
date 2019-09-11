import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateProductComponent } from './pages/product/create-product/create-product.component';
import { EditProductComponent } from './pages/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './pages/product/delete-product/delete-product.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MasterComponent } from './pages/master/master.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ListProductComponent,
    LoadingComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticatedGuard, ManagerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
