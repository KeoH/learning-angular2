System.register(['angular2/core', './authors.service', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authors_service_1, like_component_1;
    var AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent(authorService) {
                    this.title = "Lista de autores disponibles";
                    this.authors = authorService.get_authors();
                }
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: "authors",
                        template: "<h2>Authors <like [likes_num]=\"21\" [liked]=\"true\"></like></h2>\n            <p>{{ title }}</p>\n            <ul>\n              <li *ngFor=\"#author of authors\">\n                {{ author }}\n              </li>\n            </ul>",
                        providers: [authors_service_1.AuthorService],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [authors_service_1.AuthorService])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map