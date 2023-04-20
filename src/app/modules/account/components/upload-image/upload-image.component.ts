import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { AccountManagementService } from '../../services/account-management.service';
import { Photo } from '../../models/photo.interface';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {

  imageSrc: SafeUrl = null;
  removeImage$: BehaviorSubject<boolean>;

  constructor(private service: AccountManagementService) {
    this.removeImage$ = new BehaviorSubject<boolean>(null);
  }

  getUrlFileUpload(photo: SafeUrl): void {
    this.imageSrc = photo;
  }

  getEventRemoveFile(value: boolean): void {
    if(value) {
      this.removeImage$.next(value);

      this.service.savePhoto(null, null);
    }
  }
}
