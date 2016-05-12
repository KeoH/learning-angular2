System.register(['angular2/core', './tweet.component'], function(exports_1, context_1) {
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
    var core_1, tweet_component_1;
    var TweetlistComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            TweetlistComponent = (function () {
                function TweetlistComponent() {
                    this.tweets = [
                        { image: "http://www.lorempixel.com/100/100/people/1",
                            usertitle: "El maloso",
                            username: "@molosote",
                            message: "Looking for a retirement soon in the coast.",
                            likes: 12,
                            liked: false
                        },
                        { image: "http://www.lorempixel.com/100/100/people/2",
                            usertitle: "El amante",
                            username: "@amantito",
                            message: "All you need is love. Love , love!!",
                            likes: 5,
                            liked: true
                        },
                        { image: "http://www.lorempixel.com/100/100/people/3",
                            usertitle: "El freak bajo la colina",
                            username: "@341freak",
                            message: "No se que texto poner de relleno mientras aprendo angular 2.",
                            likes: 132,
                            liked: true
                        }
                    ];
                }
                TweetlistComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet-list',
                        template: "\n    <ul>\n      <li *ngFor=\"#tweet of tweets\">\n        <tweet [data]=\"tweet\"></tweet>\n      </li>\n    </ul>\n  ",
                        directives: [tweet_component_1.TweetComponent],
                        styles: ["\n    ul{\n      padding: 0;\n      margin: 0;\n      list-style: none;\n    }\n    li{\n      padding: .5em;\n      margin: .5em 0;\n      border: 1px solid #ddd;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetlistComponent);
                return TweetlistComponent;
            }());
            exports_1("TweetlistComponent", TweetlistComponent);
        }
    }
});
//# sourceMappingURL=tweetlist.component.js.map