import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  toggleNotification:boolean = false;
  home_image:String = "../../assets/icons/home.png";
  explore_image:String = "../../assets/icons/search.png";
  notification_image:String = "../../assets/icons/notification.png";
  message_image:String = "../../assets/icons/message.png";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url==="/") {
      this.home_image = "../../assets/icons/home-active.png";
    } else if(this.router.url==="/explore") {
      this.explore_image = "../../assets/icons/search-active.png";
    } else if(this.router.url==="/message") {
      this.message_image = "../../assets/icons/message-active.png";
    }
  }

  home() {
    this.router.navigate([{outlets: {primary: 'path' , loggedOutlet: 'path'}}]);
  }
  explore() {
    this.router.navigate([{outlets: {primary: 'explore' , loggedOutlet: 'explore'}}]);
  }
  toggle() {
    this.toggleNotification = !this.toggleNotification;
    if(this.toggleNotification)
      this.notification_image = "../../assets/icons/notification-active.png";
    else
      this.notification_image = "../../assets/icons/notification.png";
  }
  message() {
    this.router.navigate(['/message']);
  }
  profile() {}
}
