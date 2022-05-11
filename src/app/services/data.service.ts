import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { XMLParser } from 'fast-xml-parser';
import { map, Observable } from 'rxjs';
import { IRssChannel, IRssItem, NewsRss } from '../news/news-rss';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  requestOptions: Object = {
    responseType: 'text'
  }; 

  constructor(private http: HttpClient) { }

  getBMUV() {
    return this.http.get<NewsRss>('https://corsanywhere.herokuapp.com/https://www.bmuv.de/umwelt.rss', this.requestOptions)
    .pipe(
      map(this.parseData),
      map((val: NewsRss) => val.rss.channel),
      map((data: IRssChannel) => {
        let itemsWithTitleAndCorrectDate: IRssItem[];
        itemsWithTitleAndCorrectDate = data.item.map(item => ({...item, pubDate: new Date(item.pubDate), source: data.title}));
        return itemsWithTitleAndCorrectDate;
      }),
    );
  }

  getUD() {
    return this.http.get('https://corsanywhere.herokuapp.com/https://www.umweltdialog.de/de/rss/UmweltDialog.php', this.requestOptions)
    .pipe(
      map(this.parseData),
      map((val: NewsRss) => val.rss.channel),
      map((data: IRssChannel) => {
        let itemsWithTitleAndCorrectDate: IRssItem[];
        itemsWithTitleAndCorrectDate = data.item.map(item => ({...item, pubDate: new Date(item.pubDate), source: data.title}));
        return itemsWithTitleAndCorrectDate;
      }),    
    );
  }

  getGFM() {
    return this.http.get('https://corsanywhere.herokuapp.com/https://www.geldfuermuell.de/rss.xml', this.requestOptions)
    .pipe(
      map(this.parseData),
      map((val: NewsRss) => val.rss.channel),
      map((data: IRssChannel) => {
        let itemsWithTitleAndCorrectDate: IRssItem[];
        itemsWithTitleAndCorrectDate = data.item.map(item => ({...item, pubDate: new Date(item.pubDate), source: data.title.slice(0, 13)}));
        return itemsWithTitleAndCorrectDate;
      }), 
    );
  }

  parseData(data) {
    return new XMLParser().parse(data);
  }
}
