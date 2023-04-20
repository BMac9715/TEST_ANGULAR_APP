import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Photo } from 'src/app/modules/account/models/photo.interface';
import { ImageService } from '../../services/image.service';

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

  constructor(private sanitizer: DomSanitizer, private imageService: ImageService) {}

  onFileSelected(event: any) {
    const file: File = event?.target?.files[0];
    if (file) {
      this.fileName = file.name;

      const blob = new Blob([file], { type: file.type });
      const imageUrl = URL.createObjectURL(blob);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageData  = reader.result;
        this.imageService.setImageData(imageData);
      }

      const imageSrc = this.sanitizer.bypassSecurityTrustUrl(imageUrl);

      this.uploadFileEvent.emit(imageSrc);
    }
  }

  onRemoveFileSelected() {
    this.fileName = '';
    this.removeFileEvent.emit(true);
  }
}
