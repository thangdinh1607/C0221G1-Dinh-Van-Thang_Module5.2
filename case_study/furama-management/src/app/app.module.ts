import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ServiceComponent } from './service/service/service.component';
import { CustomerServiceComponent } from './service/customer-service/customer-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ServiceComponent,
    CustomerServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
