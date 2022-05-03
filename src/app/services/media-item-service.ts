import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium: string) {
    const getOptions = {
      params: { medium },
    };
    return this.http.get<MediaItemsResponse>("mediaItems", getOptions).pipe(
      map((response: MediaItemsResponse) => {
        console.log(response.mediaItems);
        return response.mediaItems;
      }),
      catchError(this.handleError)
    );
  }

  add(mediaItem: MediaItem) {
    // this.mediaItems.push(mediaItem);
    return this.http
      .post("mediaitems", mediaItem)
      .pipe(catchError(this.handleError));
  }
  delete(mediaItem: MediaItem) {
    // const index = this.mediaItems.indexOf(mediaItem);
    // if (index >= 0) {
    //   this.mediaItems.splice(index, 1);
    // }
    return this.http
      .delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError("A data error occurred, please try again.");
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
