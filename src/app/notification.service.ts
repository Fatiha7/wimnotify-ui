import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs'
import { Notification } from './notification';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseURL="http://localhost:8083/CRUD_Notification"
  constructor(private httpClient:HttpClient) { }

  getNotificationList(): Observable<Notification[]>{
  return this.httpClient.get<Notification[]>(`${this.baseURL}`);
  }
  setNotification(notification:Notification):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,notification);
  }
 getNotificationById(id: number):Observable<Notification>{
  return this.httpClient.get<Notification>(`${this.baseURL}/${id}`);
 }
 DeleteNotification(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
 UpdateNotification(notification:Notification, id: number):Observable<object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,notification);
 }
}
