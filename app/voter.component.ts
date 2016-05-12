import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
    selector: 'votes',
    template: `
      <div class="voter">
        <i class="glyphicon glyphicon-menu-up" [class.active]="myVote == 1" (click)="voteUp()"></i>
        <span>{{voteCount + myVote}}</span>
        <i class="glyphicon glyphicon-menu-down" [class.active]="myVote == -1" (click)="voteDown()"></i>
      </div>
    `,
    styles: [`
      .voter{
        text-align: center;
        max-width: 20px;
        color: #999;
      }
      span {
        font-size: 1.2em;
      }
      .active{
        color: orange;
      }
      .glyphicon{
        cursor: pointer;
      }
    `]
})
export class VoterComponent{
  @Input() voteCount = 0;
  @Input() myVote = 0;
  @Output() vote = new EventEmitter();

  voteUp(){
    if (this.myVote < 1) {
      this.myVote += 1;
      this.vote.emit({ myVote : this.myVote });
    }
  }
  voteDown(){
    if(this.myVote > -1){
      this.myVote -= 1;
      this.vote.emit({ myVote : this.myVote });

    }
  }


}
