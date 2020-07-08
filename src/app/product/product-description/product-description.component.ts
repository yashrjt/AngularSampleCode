import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  @Input() prod:Array<any>;
  @Output() selectedProd:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectedItem(id){
    console.log(id);
    this.selectedProd.emit(id);
  }

}
