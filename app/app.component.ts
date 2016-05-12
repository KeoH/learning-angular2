import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './authors.component';
import {VoterComponent} from './voter.component';
import {TweetlistComponent} from './tweetlist.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
      <div class="row">
        <div class="col-md-6">
          <courses></courses>
        </div>
        <div class="col-md-6">
          <authors></authors>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3>Tweets components</h3>
          <tweet-list></tweet-list>
        </div>
        <div class="col-md-6">
          <h3>Componentes sueltos</h3>
           <votes></votes>
        </div>
      </div>
    `,
    directives: [CoursesComponent, AuthorComponent, VoterComponent, TweetlistComponent]
})
export class AppComponent { }
