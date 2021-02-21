import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from '../models/Contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl = 'http://localhost:3002/users'
  constructor(private http: HttpClient) {}

  // GET all contacts
  GetContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseUrl)
  }

  // POST contact
  PostContact(contact: Contact){
    return this.http.post<any>(this.baseUrl, contact)
  }

  // DELETE contact
  DeleteContact(id:number){
    return this.http.delete<any>(this.baseUrl + '/'+id)
  }
}
