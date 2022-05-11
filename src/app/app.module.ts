import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
import { AlleNewsComponent } from './alle-news/alle-news.component';
import { UDNewsComponent } from './ud-news/ud-news.component';
import { BmuvNewsComponent } from './bmuv-news/bmuv-news.component';
import { GFMNewsComponent } from './gfm-news/gfm-news.component';
import { FooterComponent } from './footer/footer.component';
registerLocaleData(localeDe, localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    NewsComponent,
    AlleNewsComponent,
    UDNewsComponent,
    BmuvNewsComponent,
    GFMNewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    [{provide: LOCALE_ID, useValue: 'de' }]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
