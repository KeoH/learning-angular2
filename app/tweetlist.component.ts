import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';

@Component({
  selector: 'tweet-list',
  template: `
    <ul>
      <li *ngFor="#tweet of tweets">
        <tweet [data]="tweet"></tweet>
      </li>
    </ul>
  `,
  directives: [TweetComponent],
  styles: [`
    ul{
      padding: 0;
      margin: 0;
      list-style: none;
    }
    li{
      padding: .5em;
      margin: .5em 0;
      border: 1px solid #ddd;
    }
  `]
})
export class TweetlistComponent {
  tweets = [
    { image: "http://www.lorempixel.com/100/100/people/1",
      usertitle: "El maloso",
      username: "@molosote",
      message: "Looking for a retirement soon in the coast.",
      likes: 12,
      liked: false
    },
    { image: "http://www.lorempixel.com/100/100/people/2",
      usertitle: "El amante",
      username: "@amantito",
      message: "All you need is love. Love , love!!",
      likes: 5,
      liked: true
    },
    { image: "http://www.lorempixel.com/100/100/people/3",
      usertitle: "El freak bajo la colina",
      username: "@341freak",
      message: "No se que texto poner de relleno mientras aprendo angular 2.",
      likes: 132,
      liked: true
    }
  ];
}
