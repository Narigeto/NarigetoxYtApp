import { ArExamplePage } from '../ar-example/ar-example';
import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {ThreejsPage} from '../threejs/threejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  channelId = 'UCpYDQBRhwH0hR5fmTkadetg'; //Jack's Channel
  playlists: Observable<any[]>;
  stats: Observable<any[]>;

  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController) { }

  searchPlaylists() {
    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlists found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    })
  }

  openPlaylist(id) {
    this.navCtrl.push('PlaylistPage', {id: id});
  }

  searchStatistics() {
    this.stats = this.ytProvider.getUserStatistics(this.channelId);
    this.stats.subscribe(data => {
      console.log('statistics: ', data);
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Statistics found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    })
  }

  pushToThreeJsPage() {
    this.navCtrl.push(ThreejsPage);
  }

  pushToARPage() {
    this.navCtrl.push(ArExamplePage);
  }
}
