import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { YearsOldPipe } from 'src/app/core/pipes/years-old.pipe';
import { AccountData } from 'src/app/modules/account/models/account.interface';
import { AccountManagementService } from 'src/app/modules/account/services/account-management.service';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent {
  imageSrc: SafeUrl = null;
  removeImage$: BehaviorSubject<boolean>;
  account: AccountData;

  isYounger: boolean = false;

  constructor(private service: AccountManagementService, private yearsPipe:YearsOldPipe) {
    this.removeImage$ = new BehaviorSubject<boolean>(null);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.imageSrc = this.service.photo;
    this.account = this.service.account;
    this.isYounger = Number.parseInt(this.yearsPipe.transform(this.account.birthday, true).toString()) >= 18 ? false : true;
  }
}
