import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  fakeArray = new Array(20);
  Tools = [
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/html5-10-569380.png',
      name: 'HTML5',
    },
    {
      image: 'https://coryrylan.com/assets/images/posts/types/css.svg',
      name: 'CSS3',
    },
    {
      image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
      name: 'JS',
    },
    {
      image: 'https://cdn.worldvectorlogo.com/logos/flutter-logo.svg',
      name: 'Flutter',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      name: 'Angular',
    },
    {
      image:
        'https://p7.hiclipart.com/preview/301/171/637/node-js-javascript-software-developer-computer-icons-angularjs-others.jpg',
      name: 'Angular',
    },
  ];
}
