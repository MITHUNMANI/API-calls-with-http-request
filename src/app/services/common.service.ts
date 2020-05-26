import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data: any;
  sharedData:any;
  details:any;
  descp: any;

  constructor(public http: HttpClient) { }
  getWeatherApi(data:any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', data);
    queryParams = queryParams.append('appid', '22ee953de59bb3acd191336be72e80ef');
  
    return this.http.get("http://api.openweathermap.org/data/2.5/weather", { params:queryParams
    })
  }
  getNews(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('country', 'in');
    queryParams = queryParams.append('apiKey', '408b4153b994422d8638da72f2d3ac5b');
    return this.http.get('https://newsapi.org/v2/top-headlines', {params: queryParams})   

    let sharedData = this.http.get('https://newsapi.org/v2/top-headlines', {params: queryParams});

    
  }

  serveDesc(data:any){
    
   this.data = data;
  }
  getNewsDes(title:any){
    console.log(title);
    // let details = [];
    let queryParams = new HttpParams();
    queryParams = queryParams.append('country', 'in');
    queryParams = queryParams.append('apiKey', '408b4153b994422d8638da72f2d3ac5b');
    return this.http.get('https://newsapi.org/v2/top-headlines', {params: queryParams});
    // console.log(this.details);
    // return this.details;
    // return this.descp;
    // this.details.forEach(element => {
      
    // });
  }




}


