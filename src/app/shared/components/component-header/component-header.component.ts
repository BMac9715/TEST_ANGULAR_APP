import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.scss']
})
export class HeaderComponent {

  @Input() title:string = '';
  @Input() message:string = '';

  constructor(private location: Location) {}

  back(): void {
    this.location.back()
  }
}
