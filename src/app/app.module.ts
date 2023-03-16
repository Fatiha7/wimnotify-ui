import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { FormsModule } from '@angular/forms';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';
@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    CreateNotificationComponent,
    UpdateNotificationComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
