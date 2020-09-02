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
      { title: 'search', link: 'search' }

    ]
  }

}
