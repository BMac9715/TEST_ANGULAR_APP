import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {

  @Input() requiredFileType:string = '';
  @Input() messageEmptyInput:string = 'Seleccionar un archivo';
  @Output() uploadFileEvent = new EventEmitter<SafeUrl>();
  @Output() removeFileEvent = new EventEmitter<boolean>();

  fileName = '';

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: any) {
    const file: File = event?.target?.files[0];
    if (file) {
      this.fileName = file.name;
      const imageUrl = URL.createObjectURL(file);
      const imageSrc = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      this.uploadFileEvent.emit(imageSrc)
    }
  }

  onRemoveFileSelected() {
    this.fileName = '';
    this.removeFileEvent.emit(true);
  }
}
