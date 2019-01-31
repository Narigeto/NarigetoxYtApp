import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;

  constructor(private inApBrowser: InAppBrowser, private navParams: NavParams, private ytProvider: YtProvider) {
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
  }

  openVideo(video) {
    this.inApBrowser.create('https://www.youtube.com/watch?v=' + video.snippet.resourceId.videoId);
  }
}
