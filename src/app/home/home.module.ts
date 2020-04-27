import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.route';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    homeRouting,
    FlexLayoutModule,
    MatCardModule,
    DragDropModule
  ]
})
export class HomeModule { }
