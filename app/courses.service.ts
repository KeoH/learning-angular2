
export class CourseService {
  get_courses() {
    return [
      {title:"Curso 1: Sobre perritos lintos", favorited: false, likes_num: 12, liked: false},
      {title:"Curso 2: Como hacer que tu gato obedezca", favorited: true, likes_num: 2, liked: false},
      {title:"Curso 3: Sin titulo", favorited: false, likes_num: 0, liked: false}
    ];
  }
}
