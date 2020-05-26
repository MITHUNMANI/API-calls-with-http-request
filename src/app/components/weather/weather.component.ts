import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
show:boolean = false;
city:string;
country:string;
temperature:any;
humidity:any;
  constructor(public commonServ: CommonService) { }

  ngOnInit(): void {
  }

getWeatherData(cityname:string){
  this.commonServ.getWeatherApi(cityname).subscribe((data:any)=>{
    console.log(data);
    this.show =true;
    this.city = data.name;
    this.country = data.sys.country;
    this.temperature = data.main.temp;
    this.humidity = data.main.humidity;
  },
  (error:any)=>{
    console.log(error);
  })
}
}
