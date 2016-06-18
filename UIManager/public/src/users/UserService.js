(function () {
    'use strict';

    angular.module('users')
        .service('userService', ['$q', UserService]);

    function UserService($q) {
        var users = [
            {
                name: 'Home',
                avatar: 'assets/img/home_banner.png',
                content: 'src/users/view/aboutme.html'
      },
            {
                name: 'Bangles',
                avatar: 'assets/img/bangle.png',
                content: 'src/users/view/skills.html'
      },
            {
                name: 'Necklace',
                avatar: 'assets/img/necklace.png',
                content: "src/users/view/employment.html"
      },
            {
                name: 'Earring',
                avatar: 'assets/img/earring.png',
                content: 'src/users/view/Earring.html'
      },
            {
                name: 'Clothing',
                avatar: 'assets/img/clothing.png',
                content: 'src/users/view/clothing.html'
      }, {
                name: 'Profile',
                avatar: 'assets/img/me.jpg',
                content: 'src/users/view/details.html'
      }
    ];

        return {
            loadAllUsers: function () {
                // Simulate async nature of real remote calls
                return $q.when(users);
            }
        };
    }

})();