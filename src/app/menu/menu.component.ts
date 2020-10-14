import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuArray: Array<any> = [];


  ngOnInit(): void {

    this.menuArray = [
      { title: 'login', link: 'login' },
      { title: 'detail', link: 'detail' },
      { title: 'parent1', link: 'parent' },
      { title: 'aboutus', link: 'aboutus' },
      { title: 'exdemo', link: 'exdemo' },
      { title: 'search', link: 'search' },
      { title: 'pipes', link: 'pipes' },
      { title: 'retry', link: 'retry' },
      { title: 'rapid', link: 'rapid' },
      { title: 'corona', link: 'corona' },
      { title: 'movie', link: 'movie' },
      { title: 'addstudent', link: 'addstudent' },
      { title: 'inputdemo', link: 'inputdemo' },
      { title: 'debounce', link: 'debounce' },
      { title: 'file', link: 'file' },
      { title: 'userlogin', link: 'userlogin' },
      { title: 'upload', link: 'upload' },
      { title: 'fileupload', link: 'fileupload' },
      { title: 'fileupload2', link: 'fileupload2' },
      { title: 'fileform', link: 'fileform' }


    ]
  }

}
