import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products=[
    {
      id:10,
      name:'LAptop'
    },
    {
      id:20,
      name:'cellhone'
    },
    {
      id:30,
      name:'ipad'
    }
  ]


  selectedItem($event){
    console.log('the user selected the item '+$event);
  }
}
