import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MediaItemService {
  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1457166565384,
      isFavorite: false,
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "SitComs",
      year: 2010,
      watchedOn: 1457166565384,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Oliver Twist",
      medium: "Telenovella",
      category: "Romance",
      year: 2022,
      watchedOn: 1457166565384,
      isFavorite: true,
    },
    {
      id: 4,
      name: "You Again",
      medium: "Series",
      category: "SitComs",
      year: 2010,
      watchedOn: 1457166565384,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Handsome Stranger",
      medium: "Movies",
      category: "SitComs",
      year: 2011,
      watchedOn: 1457166565384,
      isFavorite: true,
    },
  ];

  get() {
    return this.mediaItems;
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }
  delete(mediaItem) {
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >=0){
    this.mediaItems.splice(index, 1);
        
    }
  }
}
