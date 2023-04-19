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
    new Game(new Date('4/18/2023'), 'Zion vs Loretto', new Link('https://app.veo.co/matches/20230418-041823-zion-vs-loretto-90a615fe/')),
    new Game(new Date('4/13/2023'), 'Zion @ Franklin Christian Academy', new Link('https://app.veo.co/matches/20230414-041323-zion-fca-7812c399/')),
    new Game(new Date('4/11/2023'), 'Zion @ Franklin Classical School', new Link('https://app.veo.co/matches/20230412-041123-zion-fcs-993fd1ed/')),
    new Game(new Date('3/28/2023'), 'Zion @ Lighthouse Christian', new Link('https://app.veo.co/matches/20230328-zion-lighthouse-christian-32823-4ad98cd6/')),
    new Game(new Date('3/23/2023'), 'Zion vs Franklin Christian Academy', new Link('https://app.veo.co/matches/20230324-zion-vs-fca-85c60667/')),
    new Game(new Date('3/17/2023'), 'Zion @ Culleoka', new Link('https://app.veo.co/matches/20230318-zca-vs-culleoka-1170a342/')),
    new Game(new Date('3/14/2023'), 'Zion vs Marshall County', new Link('https://app.veo.co/matches/20230315-zca-vs-marshall-county-d5f09084/')),
    new Game(new Date('3/10/2023'), 'Zion vs FC Boyd', new Link('https://app.veo.co/matches/20230311-173512-bd14d6f8/')),
    new Game(new Date('3/6/2023'), 'Zion @ Columbia Academy', new Link('https://app.veo.co/matches/20230125-zion-columbia-academy-030723-31a991a6/')),
    new Game(new Date('1/11/2023'), 'Zion Cup 2023', new Link('https://app.veo.co/matches/20230111-zion-cup-2023-32ce6649/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('3/29/2023'), new Link('https://app.veo.co/matches/20230329-032923-zion-msoc-training-c153d1a9/')),
    new Practice(new Date('3/7/2023'), new Link('https://app.veo.co/matches/20230307-160216-8b0f5b8c/'))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    new Practice(new Date('3/30/2023'), new Link('https://app.veo.co/matches/20230330-033023-zion-msoc-training-e056aecf/')),
    new Practice(new Date('3/20/2023'), new Link('https://app.veo.co/matches/20230320-032023-zion-training-515c4b70/')),
    new Practice(new Date('3/16/2023'), new Link('https://app.veo.co/matches/20230316-031623-zion-training-adce9f77/')),
    new Practice(new Date('3/15/2023'), new Link('https://app.veo.co/matches/20230315-031523-zion-training-2befd2dd/'))
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.practices = this.router.url.includes(hiddenRoute) ? this.closedPractices : this.openPractices;
  }
}
