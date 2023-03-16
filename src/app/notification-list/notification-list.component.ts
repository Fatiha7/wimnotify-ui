import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Notification} from '../notification'
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notifications: Notification[];
  constructor(private notificationService: NotificationService,private router:Router) {}
  ngOnInit(): void {
    this.getNotifications();
      
  }
  private getNotifications(){
this.notificationService.getNotificationList().subscribe(data =>{
  this.notifications =data;
})
  }
  updatenotification(id:number){
    this.router.navigate(['update-notification',id])
  }
  deletenotification(id: number){
    this.notificationService.DeleteNotification(id).subscribe(data =>
      {
        this.getNotifications();
  })
  
  }
}
