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
    
  }

  ngDoCheck(): void {
    if(this.router.url==="/") {
      this.home_image = "../../assets/icons/home-active.png";
      this.explore_image = "../../assets/icons/search.png";
      this.message_image = "../../assets/icons/message.png";
    } else if(this.router.url==="/explore") {
      this.explore_image = "../../assets/icons/search-active.png";
      this.home_image = "../../assets/icons/home.png";
      this.message_image = "../../assets/icons/message.png";
    } else if(this.router.url==="/message") {
      this.message_image = "../../assets/icons/message-active.png";
      this.home_image = "../../assets/icons/home.png";
      this.explore_image = "../../assets/icons/search.png";
    } else if(this.router.url==="/profile") {
      this.message_image = "../../assets/icons/message.png";
      this.home_image = "../../assets/icons/home.png";
      this.explore_image = "../../assets/icons/search.png";
    }
  }

  home() {
    this.router.navigate(['/']);
  }
  explore() {
    this.router.navigate(['/explore']);
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
  profile() {
    this.router.navigate(['/profile']);
  }
}
