import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './component/banner/banner.component';
import { OfferLineComponent } from './component/offer-line/offer-line.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    OfferLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
