import { Component, OnInit } from '@angular/core';

import { Link } from '../../core/models/link';
import { Game } from '../models/game';
import { Practice } from '../models/practice';

@Component({
  selector: 'app-columbia-arsenal-u17b-soccer',
  templateUrl: './columbia-arsenal-u17b-soccer.component.html',
  styleUrls: ['./columbia-arsenal-u17b-soccer.component.scss']
})
export class ColumbiaArsenalU17bSoccerComponent implements OnInit {
  public games: Game[] = [
    { date: new Date('7/3/2022'), opponent: 'Opponent 1', link: new Link('Google', 'https://www.google.com/') },
    { date: new Date('7/9/2022'), opponent: 'Opponent 2', link: new Link('Google', 'https://www.google.com/') }
  ];
  public practices: Practice[] = [
    { date: new Date('7/4/2022'), link: new Link('Google', 'https://www.google.com/') },
    { date: new Date('7/10/2022'), link: new Link('Google', 'https://www.google.com/') }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
