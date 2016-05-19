(function() {
var app = angular.module('app', ['ngRoute', 'ui.router'])
  .controller('projectsController', ['$scope', function($scope) {
    $scope.selectedProject;
    $scope.projects = [
      {
        name: 'Interactive Bus Signs',
        role: 'Designer and Developer',
        img: 'city-heat-map.jpg',
        link: '',
        description: 'When tasked with designing for the theme Internet of Things in Cities I designed and prototyped these commercial signs that the user can interact with in order to find out which roads are heavily trafficed, where the bus is and show a heat map of people.',
        participants: ['Eric Blomquist', 'Ludwig Sidenmark'],
        slug: 'interactive-bus-signs'
      },
      {
        name: 'Studs',
        role: 'Communications Manager',
        img: 'studs.jpg',
        link: 'http://studieresan.se',
        description: 'Being part of the lead group for the Studieresan project, I was responsible for the website. I recruited a team of developers and remade the website www.studieresan.se. I was mostly handling the backend, setting up models, databases and servers.',
        participants: ['Joakim Edlund', 'Victor Larsson', 'William Perkola'],
        slug: 'studs'
      },
      {
        name: 'Voice Controlled Animation',
        role: 'Programmer',
        img: 'vca.jpg',
        link: 'https://www.youtube.com/watch?v=6bI5TPnc2NI&index=9&list=FL5OeLqOJLESrqvNyUlvLJ8w',
        description: 'Developed in the Unity game engine we made a small game that used the voice of the players as the only input for the main players side kick. Using multiple modalitys was fun and gave the game another dimension.',
        participants: ['Alexander Johansson', 'Björn Englesson', 'Eric Blomquist'],
        slug:'vca'
      },
      {
        name: 'Studs-app',
        role: 'Programmer and Designer',
        img: 'studs-logo.svg',
        link: '',
        description: 'For the Studieresan project we designed and developed an mobile application that would help the members of the project with the schedule and leisure time of the trip. The participants can upload photos to challenges in the app and see on the map where the next event is.',
        participants: ['Aroshine Munasinghe', 'Emilio Lando', 'Eric Blomquist'],
        slug: 'studs-app'
      },
      {
        name: 'Sheetify',
        role: 'Designer',
        img: 'sheetify.jpg',
        link: 'https://lallanasinpyjamas.wordpress.com/',
        description: 'In the course "Interaction Design Methods" we had design projects based on 10-year old children ideas. Our projects was to design an app that would record music and output sheet music.',
        participants: ['Eric Blomquist', 'Ludwig Sidenmark'],
        slug: 'sheetify'
      }
    ];

    $scope.selectProject = function (project) {
      $scope.selectedProject = project;
      console.log(project);
    };
  }]);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');

    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'www/views/index.html'
      })
      .state('studs', {
        url: '/projects/studs',
        templateUrl: 'www/views/studs.html'
      })
      .state('interactive-bus-signs', {
        url: '/projects/interactive-bus-signs',
        templateUrl: 'www/views/interactive-bus-signs.html'
      })
      .state('vca', {
        url: '/projects/vca',
        templateUrl: 'www/views/vca.html'
      })
      .state('sheetify', {
        url: '/projects/sheetify',
        templateUrl: 'www/views/sheetify.html'
      })
      .state('studs-app', {
        url: '/projects/studs-app',
        templateUrl: 'www/views/studs-app.html'
      })
  });
})();
