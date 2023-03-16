import { Component,OnInit  } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-notification',
  templateUrl: './update-notification.component.html',
  styleUrls: ['./update-notification.component.css']
})
export class UpdateNotificationComponent implements OnInit {
  notification: Notification= new Notification();
  id:number;
constructor(private notificationservice: NotificationService, private route:ActivatedRoute,private router:Router ){}
  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.notificationservice.getNotificationById(this.id).subscribe(data =>
        {
          this.notification=data;
          console.log(data.id)
        },
        error=>console.log(error))

  }
  updateNotification(){
    this.notificationservice.UpdateNotification(this.notification,this.id).subscribe(data =>
      {
      this.gotToNotificationList()
      },
      error =>console.log(error));
  }
  gotToNotificationList(){
    this.router.navigate(['/notifications']);
  }
  onSubmit(){
    this.updateNotification()
  }
}
