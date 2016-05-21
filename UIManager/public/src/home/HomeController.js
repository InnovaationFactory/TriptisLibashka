(function () {

    angular
        .module('home')
        .controller('HomeController', ['productsService', HomeController]);

    function HomeController() {
        var self = this;
        self.myInterval = 5000;
        self.noWrapSlides = false;
        self.active = 0;
        var slides = self.slides = [];
        var currIndex = 0;

        //        self.addSlide = function () {
        //            var newWidth = 600 + slides.length + 1;
        //            slides.push({
        //                image: 'assets/img/banner.jpg',
        //                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
        //                id: currIndex++
        //            });
        //        };

        self.randomize = function () {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };


        slides.push({
            image: "banner1",
            text: "Beautiful necklaces",
            id: 0
        });

        slides.push({
            image: "banner2",
            text: "Exquisite Jwellery",
            id: 1
        });

        slides.push({
            image: 'banner3',
            text: "Bridal Bangles",
            id: 2
        });

        slides.push({
            image: 'banner4',
            text: "Bridal Jwellery",
            id: 3
        });


        //        for (var i = 0; i < 4; i++) {
        //            self.addSlide();
        //        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }
    };
})();