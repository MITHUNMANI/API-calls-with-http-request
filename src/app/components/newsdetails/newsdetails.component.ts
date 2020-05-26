import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
  x: any;
  data: any;
  title: any;
  display: any = [];
  constructor(public newsSer: CommonService, public aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params => {
      this.title = params.title;
    })
    // console.log(this.newsSer.getNewsDes());
    // this.data = this.newsSer.getNewsDes().subscribe(())
  
  }


  ngOnInit(): void {
    this.newsSer.getNewsDes(this.title).subscribe((data:any)=>{
      
      data.articles.forEach(element => {
        if(element.title == this.title) {
          console.log(element);
          this.display = element;
        }
       });

    },
    (error:any)=>{
      console.log(error);
    });
  }

  

}
