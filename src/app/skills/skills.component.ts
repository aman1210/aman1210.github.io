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
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/872px-Android_robot.svg.png',
      name: 'Android',
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
      image: './assets/nodejs.png',
      name: 'NodeJS',
    },
    {
      image: './assets/mongo.png',
      name: 'MongoDB',
    },
    {
      image: './assets/express.png',
      name: 'Express',
    },
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
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png',
      name: 'Illustrator',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Adobe_Photoshop_Express_logo.svg',
      name: 'Photoshop',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png',
      name: 'XD',
    },
  ];
}
