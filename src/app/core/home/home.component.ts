import { Component, OnInit, OnDestroy ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy,OnChanges {

  constructor() {
    console.log('constructor called')
   }

   ngOnChanges(){
    console.log('onchanges called')
   }
  ngOnInit() {
    //subscribe
    console.log('oninit called')
  }


  employee=[
    {
      name:'John',
      age:40,
      dept:'HR',
      salary:4500,
      doj:'10-12-2010'
    },
    {
      name:'Stephen',
      age:35,
      dept:'Accounts',
      salary:7000,
      doj:'10-12-2010'
    },
    {
      name:'Dave',
      age:30,
      dept:'IT',
      salary:10000,
      doj:'10-12-2010'
    }
  ]


  ngOnDestroy(){
    //unsubscribe
    console.log('ondestroy called')
  }
}
