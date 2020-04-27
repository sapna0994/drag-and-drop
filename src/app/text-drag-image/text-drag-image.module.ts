import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { textDragImageRouting } from './text-drag-image.route';
import { TextDragImageComponent } from './text-drag-image.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [TextDragImageComponent],
  imports: [
    CommonModule,
    textDragImageRouting,
    FlexLayoutModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TextDragImageModule { }
