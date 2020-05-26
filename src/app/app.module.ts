import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WeatherComponent } from './components/weather/weather.component';
import { NewsComponent } from './components/news/news.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';
import { ZomatoComponent } from './components/zomato/zomato.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    WeatherComponent,
    NewsComponent,
    NewsdetailsComponent,
    ZomatoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
