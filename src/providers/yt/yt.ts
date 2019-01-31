import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyB75yaNaXTXWnz8B6aQqpguyq9H68YQIGw';

  constructor(public http: Http) { }

  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
      .map((res) => {
        return res.json()['items'];
      })
  }

  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
      .map((res) => {
        return res.json()['items'];
      })
  }
  getUserStatistics(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/channels?part=statistics%2C+snippet&id=' + channel + '&maxResults=50&key=' + this.apiKey)
      .map((res) => {
        return res.json()['items'];
      })
  }
}
