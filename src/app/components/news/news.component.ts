import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any= '';
  constructor(public newsSer: CommonService, public myRoute: Router) { }
  ngOnInit(): void {  
    this.newsSer.getNews().subscribe((data:any)=>{
      console.log(data);
      this.news = data;
    },
    (error:any)=>{
      console.log(error);
    }); 
}
fulldesc(data:any){
  this.newsSer.serveDesc(data);
  this.myRoute.navigateByUrl('/newsdetails/'+data.title);
}
}
