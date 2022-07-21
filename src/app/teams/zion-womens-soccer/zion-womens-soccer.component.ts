import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { hiddenRoute } from 'src/app/app-routing.module';
import { Link } from '../../core/models/link';
import { Game } from '../models/game';
import { Practice } from '../models/practice';

@Component({
  selector: 'app-zion-womens-soccer',
  templateUrl: './zion-womens-soccer.component.html',
  styleUrls: ['./zion-womens-soccer.component.scss']
})
export class ZionWomensSoccerComponent implements OnInit {
  public games: Game[] = [
    new Game(new Date('7/20/2022'), 'Zion vs Spring Hill (7v7)', new Link('VEO Link', 'https://app.veo.co/matches/20220721-072022-zion-vs-spring-hill/')),
    new Game(new Date('7/20/2022'), 'Zion vs Shelbyville (7v7)', new Link('VEO Link', 'https://app.veo.co/matches/20220721-072022-zion-vs-shelbyville/')),
    new Game(new Date('7/20/2022'), 'Zion vs Fairview (7v7)', new Link('VEO Link', 'https://app.veo.co/matches/20220721-072022-zion-vs-fairview/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('7/10/2022'), new Link('Test 2', ''))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    new Practice(new Date('7/20/2022'), new Link('Test 1', ''))
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.practices = this.router.url.includes(hiddenRoute) ? this.closedPractices : this.openPractices;
  }
}
