import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium) {
    const getOptions = {
      params: {medium}
    }
    return this.http.get<MediaItemsResponse>("mediaItems", getOptions).pipe(
      map((response) => {
        return response.mediaItems;
      })
    );
  }

  add(mediaItem) {
    // this.mediaItems.push(mediaItem);
    return this.http.post('mediaitems', mediaItem)
  }
  delete(mediaItem) {
    // const index = this.mediaItems.indexOf(mediaItem);
    // if (index >= 0) {
    //   this.mediaItems.splice(index, 1);
    // }
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
