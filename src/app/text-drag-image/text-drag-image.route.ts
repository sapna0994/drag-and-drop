import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextDragImageComponent } from './text-drag-image.component';

const textDragImageRoutes: Routes = [{ path: '', component: TextDragImageComponent }];
export const textDragImageRouting: ModuleWithProviders = RouterModule.forChild(textDragImageRoutes);
