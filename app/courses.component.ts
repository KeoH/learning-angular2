import {Component} from 'angular2/core'
import {CourseService} from './courses.service';
import {AutoGrowDirective} from './autogrow.directive';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';

@Component({
  selector: 'courses',
  template: `<h2>Courses</h2>
            <p>{{ title }}</p>
            <input type="text" autoGrow/>
            <ul>
              <li *ngFor="#course of courses">
                <like [liked]=course.liked [likes_num]="course.likes_num"></like> -> {{ course.title }} <favorite [favorited]="course.favorited" ></favorite>
              </li>
            </ul>
            `,
  providers: [CourseService],
  directives: [AutoGrowDirective, FavoriteComponent, LikeComponent]
})
export class CoursesComponent {
  title: string = "Titulo para la pagina de los cursos";
  courses;

  constructor(courseService: CourseService){
    this.courses = courseService.get_courses();
  }

}
