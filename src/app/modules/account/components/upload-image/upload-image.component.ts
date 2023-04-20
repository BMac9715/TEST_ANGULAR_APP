import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {

  imageSrc: SafeUrl = null;
  removeImage$: BehaviorSubject<boolean>;

  constructor() {
    this.removeImage$ = new BehaviorSubject<boolean>(null);
  }

  getUrlFileUpload(src: SafeUrl): void {
    this.imageSrc = src;
  }

  getEventRemoveFile(value: boolean): void {
    if(value) {
      this.removeImage$.next(value);
    }
  }
}
