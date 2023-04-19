import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFileComponent } from './components/input-file/input-file.component';
import { PictureFrameComponent } from './components/picture-frame/picture-frame.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/component-header/component-header.component';

@NgModule({
    declarations: [
      InputFileComponent,
      PictureFrameComponent,
      HeaderComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      InputFileComponent,
      PictureFrameComponent,
      HeaderComponent
    ]
})
export class SharedModule
{
}
