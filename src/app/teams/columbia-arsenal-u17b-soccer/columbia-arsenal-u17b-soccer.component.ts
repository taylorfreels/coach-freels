import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { hiddenRoute } from 'src/app/app-routing.module';
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
    //new Game(new Date('7/3/2022'), 'Opponent 1', new Link('Google', 'https://www.google.com/')),
    //new Game(new Date('7/9/2022'), 'Opponent 2', new Link('Google', 'https://www.google.com/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    // new Practice(new Date('7/21/2022'), new Link('Test 2', ''))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    // new Practice(new Date('7/20/2022'), new Link('Test 1', ''))
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.practices = this.router.url.includes(hiddenRoute) ? this.closedPractices : this.openPractices;
    this.practices.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.games.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
