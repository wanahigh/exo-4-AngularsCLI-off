import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

    @Input()fruit: string ;
    @Input()fruits: string ;



  constructor() { }

  ngOnInit() {
  }

}
