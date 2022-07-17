import { Component, OnInit } from '@angular/core';

import { Link } from '../../core/models/link';
import { Game } from '../models/game';
import { Practice } from '../models/practice';

@Component({
  selector: 'app-zion-mens-soccer',
  templateUrl: './zion-mens-soccer.component.html',
  styleUrls: ['./zion-mens-soccer.component.scss']
})
export class ZionMensSoccerComponent implements OnInit {
  public games: Game[] = [
    new Game(new Date('7/3/2022'), 'Opponent 1', new Link('Google', 'https://www.google.com/')),
    new Game(new Date('7/9/2022'), 'Opponent 2', new Link('Google', 'https://www.google.com/'))
  ];
  public practices: Practice[] = [
    new Practice(new Date('7/4/2022'), new Link('Google', 'https://www.google.com/')),
    new Practice(new Date('7/10/2022'), new Link('Google', 'https://www.google.com/'))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
