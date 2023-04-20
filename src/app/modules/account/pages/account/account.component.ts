import { Component } from '@angular/core';
import { AccountManagementService } from '../../services/account-management.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(private service: AccountManagementService, private router: Router, private route: ActivatedRoute) {

  }

  navigate(): void {
    this.router.navigate(['choose-pokemon'], { relativeTo: this.route })
  }

}
