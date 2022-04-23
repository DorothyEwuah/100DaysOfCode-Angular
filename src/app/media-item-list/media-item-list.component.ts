import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
    }
  ];
  onMediaItemDelete(mediaItem) { }
}
