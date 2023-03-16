import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';

const routes: Routes = [
  {path:'notifications',component: NotificationListComponent},
  {path:'create-notification', component:CreateNotificationComponent},
  {path:'update-notification/:id', component:UpdateNotificationComponent},
  {path:'',redirectTo:'notifications',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
