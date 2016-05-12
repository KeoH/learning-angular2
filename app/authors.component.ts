import {Component} from 'angular2/core'
import {AuthorService} from './authors.service';
import {LikeComponent} from './like.component';

@Component({
  selector: "authors",
  template: `<h2>Authors <like [likes_num]="21" [liked]="true"></like></h2>
            <p>{{ title }}</p>
            <ul>
              <li *ngFor="#author of authors">
                {{ author }}
              </li>
            </ul>`,
  providers: [AuthorService],
  directives: [LikeComponent]
})
export class AuthorComponent{
  title: string = "Lista de autores disponibles"
  authors;
  constructor(authorService: AuthorService){
    this.authors = authorService.get_authors();
  }
}
