import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //show password toggle
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }


  // for loading spinner
  loading = false;
  save(): void {
    this.loading = true;
  }

}
