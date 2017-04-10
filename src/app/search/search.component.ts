import { Component, OnInit } from '@angular/core';
import { SearchService  } from './search.service';

@Component({
  selector: 'app-consult',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private articles: any;
  private query: string;


  constructor(private searchService: SearchService) {  }

  ngOnInit() {
  }

  searchArticles()
  {
    this.searchService.getArticles(this.query)
      .subscribe(data => this.articles = data["response"]["docs"]);
  }

}