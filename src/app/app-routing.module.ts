import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ZomatoComponent } from './components/zomato/zomato.component';
import { NewsdetailsComponent } from './components/newsdetails/newsdetails.component';
import { NewsComponent } from './components/news/news.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'weather', component: WeatherComponent, canActivate: [AuthGuard]},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard]},
  {path: 'newsdetails/:title', component: NewsdetailsComponent, canActivate: [AuthGuard] },
  {path: 'zomato', component: ZomatoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
