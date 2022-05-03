import {Routes, RouterModule} from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

const mediaItemFormRoutes: Routes = [
    {path: '', component: MediaItemFormComponent}
];

export const mediaItemFormRouting = RouterModule.forChild(mediaItemFormRoutes);