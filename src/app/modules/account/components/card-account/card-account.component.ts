import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AccountData } from '../../models/account.interface';
import { AccountManagementService } from '../../services/account-management.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card-account',
  templateUrl: './card-account.component.html',
  styleUrls: ['./card-account.component.scss']
})
export class CardAccountComponent {

  imageSrc: SafeUrl = null;
  removeImage$: BehaviorSubject<boolean>;
  account: AccountData;

  constructor(private service: AccountManagementService) {
    this.removeImage$ = new BehaviorSubject<boolean>(null);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.imageSrc = this.service.photo;
    this.account = this.service.account;
  }

}
