import {Component, Input} from 'angular2/core'

@Component({
  selector: 'like',
  template: `
    <i class="glyphicon glyphicon-heart" [class.liked]="liked" (click)="onClick()"></i>
    <span>{{likes_num}}</span>
  `,
  styles: [`
      .glyphicon-heart{
        cursor: pointer;
        color: #ccc;
      }
      .glyphicon-heart.liked{
        color: deeppink;
      }
    `]
})
export class LikeComponent{
  @Input() likes_num = 0;
  @Input() liked = false;

  onClick(){
    this.liked = !this.liked;
    this.likes_num += this.liked ? 1 : -1;
  }

}
