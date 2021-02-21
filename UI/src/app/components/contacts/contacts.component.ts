import { Component, OnDestroy, OnInit } from '@angular/core';
import {Contact} from '../../models/Contact'
import { ContactsService} from '../../services/contacts.service';
import {Observable, Subscription} from 'rxjs'


@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit ,OnDestroy{

	model:any = {};
	contacts:Contact[] = [];
	subscription: Subscription

	constructor(private _contacts: ContactsService) { 
        this.getAllContacts()
    }

	ngOnInit(): void {
	}

	getAllContacts() {
		this.subscription = this._contacts.GetContacts().subscribe(contacts=>{
		this.contacts = contacts
	 })
	}
	postContact(){
		this._contacts.PostContact(this.model).subscribe(
				() => {
                    this.getAllContacts()

				},
				(err) => console.log(err)
			);
	}

    deleteContact(contact){
        	this._contacts.DeleteContact(contact._id).subscribe(
				() => {
                    this.getAllContacts()

				},
				(err) => console.log(err)
			);
    }
	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		this.subscription.unsubscribe();
	}
}
