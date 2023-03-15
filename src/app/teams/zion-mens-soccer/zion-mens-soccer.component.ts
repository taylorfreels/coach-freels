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
    new Game(new Date('3/14/2023'), 'Zion vs Marshall County', new Link('https://app.veo.co/matches/20230315-zca-vs-marshall-county-d5f09084/')),
    new Game(new Date('3/10/2023'), 'Zion vs FC Boyd', new Link('https://app.veo.co/matches/20230311-173512-bd14d6f8/')),
    new Game(new Date('3/6/2023'), 'Zion @ Columbia Academy', new Link('https://app.veo.co/matches/20230125-zion-columbia-academy-030723-31a991a6/')),
    new Game(new Date('1/11/2023'), 'Zion Cup 2023', new Link('https://app.veo.co/matches/20230111-zion-cup-2023-32ce6649/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('3/7/2023'), new Link('https://app.veo.co/matches/20230307-160216-8b0f5b8c/'))
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
