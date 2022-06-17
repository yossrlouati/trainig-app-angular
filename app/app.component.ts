import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-app';
  nbpart: number = 0;
  firstSession = {
    id: 1,
    name: "formation Web",
    track: "Mean Stack",
    date: new Date('2021-11-25'),
    local: "Lyon",
    duree: 3,
    participants: 0
  };
}


