import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  showing = false;
  projects: Project[] = [
    new Project(
      'Expense Manager',
      './assets/p1.jpg',
      'Android',
      'An interactive app to manage personal expenses.',
      'Flutter and Android Studio',
      'https://github.com/aman1210/FlutterExpenseTracker',
      'https://play.google.com/store/apps/details?id=com.souleater.expenseTracker',
      
    ),
    new Project(
      'SoulMusic',
      './assets/p2.jpg',
      'Web app',
      'A simple music streaming web app.',
      'Angular, NodeJS, Express and MongoDB',
      'https://github.com/aman1210/MusicProject',
      null,
      'https://musicmean-4a1d1.web.app/'
    ),
    new Project(
      'Wallpaper',
      './assets/p3.jpg',
      'Android app',
      'A clean wallpaper app.',
      'Flutter',
      'https://github.com/aman1210/Flutter-Wallpaper-App'
    ),
    new Project(
      'App UI Ideas',
      './assets/p4.jpg',
      'Android app',
      'Some UI ideas for app.',
      'Flutter',
      'https://github.com/aman1210/FlutterUIChallenge'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  show(el) {
    el.querySelector('.card-content').classList.add('show-detail');
    this.showing = true;
  }
  hide(el) {
    el.querySelector('.card-content').classList.remove('show-detail');
    this.showing = false;
  }
}
