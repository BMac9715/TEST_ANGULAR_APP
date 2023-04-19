import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {

  @Input() requiredFileType:string = '';
  @Input() messageEmptyInput:string = 'Seleccionar un archivo';

  fileName = '';

  constructor() {}

  onFileSelected(event: any) {
    const file:File = event?.target?.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);
      //const upload$ = this.http.post("/api/thumbnail-upload", formData);
      //upload$.subscribe();
    }
  }

  onRemoveFileSelected() {
    this.fileName = '';
  }
}
