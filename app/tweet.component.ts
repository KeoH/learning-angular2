import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
  selector: 'tweet',
  template: `
    <div class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object rounded" [src]="data.image">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ data.usertitle }} <small>{{ data.username }}</small></h4>
        <p>{{ data.message }}</p>
        <div><like [likes_num]="data.likes" [liked]="data.liked"></like></div>
      </div>
    </div>
  `,
  directives: [LikeComponent],
  styles: [`
    .rounded{
      border-radius: 15px;
    }
  `]
})
export class TweetComponent {
  @Input() data;
}
