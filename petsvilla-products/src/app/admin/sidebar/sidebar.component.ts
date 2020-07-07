import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  viewOrder() {
    this.router.navigate(['../view-orders'], { relativeTo: this.route });
  }
  viewCompletedOrder() {
    this.router.navigate(['../completed-orders'], { relativeTo: this.route });
  }
  addStories() {
    this.router.navigate(['../add-stories'], { relativeTo: this.route });
  }
  addProducts() {
    this.router.navigate(['../add-products'], { relativeTo: this.route });
  }
}
