import { Component } from '@angular/core';
import { AccountData } from 'src/app/modules/account/models/account.interface';
import { AccountManagementService } from 'src/app/modules/account/services/account-management.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  title: string = '';

  accountData: AccountData;

  constructor(private accountService: AccountManagementService) {
    this.accountData = this.accountService.account;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title = `!Hola ${this.accountData.fullname.split(' ')[0]}!`
  }

}
