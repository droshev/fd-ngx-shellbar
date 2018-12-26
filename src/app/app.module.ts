import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FundamentalNgxModule } from 'fundamental-ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FundamentalNgxModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
