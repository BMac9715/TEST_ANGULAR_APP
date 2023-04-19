import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent {

  //https://images.unsplash.com/photo-1491528323818-fdd1faba62cc
  @Input() imageSrc:string = '';

  constructor() {

  }

}
