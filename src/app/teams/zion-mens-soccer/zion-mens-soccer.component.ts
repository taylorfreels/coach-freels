import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { hiddenRoute } from 'src/app/app-routing.module';
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
    new Game(new Date('1/11/2023'), 'Zion Cup 2023', new Link('https://app.veo.co/matches/20230111-zion-cup-2023-32ce6649/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    // new Practice(new Date('7/21/2022'), new Link(''))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    // new Practice(new Date('7/20/2022'), new Link(''))
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.practices = this.router.url.includes(hiddenRoute) ? this.closedPractices : this.openPractices;
  }
}
