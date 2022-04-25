import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../services/media-item-service';
import { MediaItem } from '../services/media-item-service';
@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: MediaItem[];

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.mediaItemService.get(this.mediaItems)
        .subscribe(mediaItems =>{
          this.mediaItems = mediaItems;
        });
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
   }

   getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
