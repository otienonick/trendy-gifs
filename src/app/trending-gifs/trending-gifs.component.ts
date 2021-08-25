import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-gifs',
  templateUrl: './trending-gifs.component.html',
  styleUrls: ['./trending-gifs.component.css']
})
export class TrendingGifsComponent implements OnInit {
  trendingGifs: any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getTrendingGifs().subscribe((response:any)=>{
      this.trendingGifs = response.data

    })

  }

}
