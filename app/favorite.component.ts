import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'favorite',
  template: `
    <i class="glyphicon"
      [class.glyphicon-star]="favorited"
      [class.glyphicon-star-empty]="favorited==false"
      (click)="onClick($event)"
      style="cursor: pointer;"></i>
  `,
  styles:[`
      .glyphicon-star {
        color: orange;
      }
    `]
})
export class FavoriteComponent{
  @Input() favorited = false;
  @Output() change = new EventEmitter();
  onClick($event){
    $event.stopPropagation();
    this.favorited = !this.favorited;
    this.change.emit({newvalue: this.favorited});
  }

}
