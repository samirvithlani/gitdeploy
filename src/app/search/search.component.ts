import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: DataService) { }
  public searchInput: string = "";
  public SearchResult: Array<any> = [];
  public selectedInput: any = [];
  toggle: Boolean = false;

  fetchSeries(event) {

    if (event.target.value === '') {

      return this.SearchResult = [];
    }

    this.SearchResult = this.seriesList.filter((series) => {

      console.log(series.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
      return series.name.toLowerCase().startsWith(event.target.value.toLowerCase())
    })
    this.toggle = false;

  }
  showDetails(series) {

    this.searchInput = series;
    this.toggle = true;
    this.searchInput = series.description;


  }

  seriesList: Array<any> = [];


  /* seriesList: Array<any> = [

    {
      "name": "Mirzapur",
      "description": "Thriller",
      "relise date": "2020-24-08"
    },
    {
      "name": "Sacred Games",
      "description": "Thriller",
      "relise date": "2020-10-09"
    },
    {
      "name": "Stranger Thing",
      "description": "Drama",
      "relise date": "2019-14-02"
    }

  ] */
  ngOnInit(): void {

    this.service.getSeries().subscribe(res => {

      this.seriesList = res;
    })
  }

}
