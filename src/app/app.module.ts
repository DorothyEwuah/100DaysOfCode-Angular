import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FavoriteDirective } from "./custom-directive/favorite.directive";
import { categoryListPipe } from "./custom-pipe/category-list.pipe";
import { MediaItemComponent } from "./mw-media-item/media-item.component";
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";
import { lookupListToken, lookupLists } from "./services/providers";
import { MockXHRBackend } from "./backend/mock-xhr-backend";
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, HttpClientModule, routing],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    categoryListPipe
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: lookupListToken,
      useValue: lookupLists,
    },
    {
      provide: HttpXhrBackend,
      useClass: MockXHRBackend,
    },
  ],
})
export class AppModule {}
