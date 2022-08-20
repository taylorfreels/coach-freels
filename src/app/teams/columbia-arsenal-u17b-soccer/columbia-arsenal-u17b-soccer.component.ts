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
    //new Game(new Date('7/3/2022'), 'Opponent 1', new Link('https://www.google.com/')),
    //new Game(new Date('7/9/2022'), 'Opponent 2', new Link('https://www.google.com/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('8/18/2022'), new Link('https://app.veo.co/matches/20220819-081822-columbia-arsenal-training-fec0e9fb/')),
    new Practice(new Date('8/8/2022'), new Link('https://app.veo.co/matches/20220809-080822-columbia-arsenal-training/')),
    new Practice(new Date('8/4/2022'), new Link('https://app.veo.co/matches/20220805-080422-columbia-arsenal-training/')),
    new Practice(new Date('8/1/2022'), new Link('https://app.veo.co/matches/20220802-columbia-arsenal-training-080122/'))
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
