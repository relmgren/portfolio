var app = angular.module('app', []);

app.controller('projectsController', function($scope) {
  $scope.projects = [
    {
      name: 'Studs',
      role: 'Communications Manager',
      img: 'studs-logo.svg',
      description: 'Being part of the lead group for the Studieresan project, I was responsible for the website. I recruited a team of developers and remade the website www.stuideresan.se. I was mostly handling the backend, setting up models, databases and servers.',
      participants: ['Joakim Edlund', 'Victor Larsson', 'William Perkola']
    },
    {
      name: 'Interactive Commercial Bus Signs',
      role: 'Designer and developer',
      img: 'city-heat-map.jpg',
      description: 'When tasked with designing for the theme Internet of Things in Cities I designed and prototyped these commercial signs that the user can interact with in order to find out which roads are heavily trafficed, where the bus is and show a heat map of people.',
      participants: ['Eric Blomquist', 'Ludwig Sidenmark']
    },
    {
      name: 'Voice Controlled Animation',
      role: 'Programmer',
      img: 'vca.jpg',
      description: 'Developed in the Unity game engine we made a small game that used the voice of the players as the only input for the main players side kick. Using multiple modalitys was fun and gave the game another dimension.',
      participants: ['Alexander Johansson', 'Björn Englesson', 'Eric Blomquist']
    },
    {
      name: 'Sheetify',
      role: 'Designer',
      img: 'sheetify.png',
      description: 'In the course "Interaction Design Methods" we had design projects based on 10-year old children ideas. Our projects was to design an app that would record music and output sheet music.',
      participants: ['Eric Blomquist', 'Ludwig Sidenmark']
    },
    {
      name: 'Studs-app',
      role: 'Programmer and designer',
      img: 'studs-logo.svg',
      description: 'For the Studieresan project we designed and developed an mobile application that would help the members of the project with the schedule and leisure time of the trip. The participants can upload photos to challenges in the app and see on the map where the next event is.',
      participants: ['Aroshine Munasinghe', 'Emilio Lando', 'Eric Blomquist']
    }
  ];

  $(document).ready(function() {
    $('.carousel').slick({
      arrows: false,
      centerMode: true
    })
  })
})
