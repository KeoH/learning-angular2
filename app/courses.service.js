System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.get_courses = function () {
                    return [
                        { title: "Curso 1: Sobre perritos lintos", favorited: false, likes_num: 12, liked: false },
                        { title: "Curso 2: Como hacer que tu gato obedezca", favorited: true, likes_num: 2, liked: false },
                        { title: "Curso 3: Sin titulo", favorited: false, likes_num: 0, liked: false }
                    ];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map