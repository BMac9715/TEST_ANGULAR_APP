import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent {

  //https://images.unsplash.com/photo-1491528323818-fdd1faba62cc
  @Input() imageSrc:SafeUrl = '';
  @Input() remove: Observable<boolean>;

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.remove.subscribe(val => {
      if(val){
        this.imageSrc = null;
      }
    })
  }

}
