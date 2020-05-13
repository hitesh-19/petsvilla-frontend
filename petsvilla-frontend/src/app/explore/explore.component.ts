import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  //filter options
  toppings = new FormControl();
  toppingList: string[] = ['Dog', 'Cat', 'Bird', 'Cow'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
