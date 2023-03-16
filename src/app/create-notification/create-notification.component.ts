import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Notification} from '../notification'
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit{
  notification: Notification = new Notification();
constructor(private notificationService: NotificationService, private router:Router){}
ngOnInit(): void {
   
}
saveNotification(){
  this.notificationService.setNotification(this.notification).subscribe((data) =>{
    this.gotToNotificationList()
    },
    error =>console.log(error));
}
gotToNotificationList(){
  this.router.navigate(['/notifications']);
}
onSubmit(){
      this.saveNotification();
}
}