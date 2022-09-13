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
    new Game(new Date('9/10/2022'), 'Columbia Arsenal @ TSC Showcase', new Link('https://app.veo.co/matches/20220911-091022-columbia-arsenal-tsc-showcase-9a28ed2a/')),
    new Game(new Date('9/3/2022'), 'Columbia Arsenal vs Dickson Soccer', new Link('https://app.veo.co/matches/20220903-090322-columbia-arsenal-vs-dcs-640965c3/')),
    new Game(new Date('8/28/2022'), 'Columbia Arsenal @ Padedores 06 Yellow', new Link('https://app.veo.co/matches/20220828-082822-columbia-arsenal-patedores-476d743e/')),
    //new Game(new Date('7/9/2022'), 'Opponent 2', new Link('https://www.google.com/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('9/12/2022'), new Link('https://app.veo.co/matches/20220913-091222-columbia-arsenal-training-8422e688/')),
    new Practice(new Date('9/1/2022'), new Link('https://app.veo.co/matches/20220902-090122-columbia-arsenal-training-7e202d27/')),
    new Practice(new Date('8/25/2022'), new Link('https://app.veo.co/matches/20220826-082522-columbia-arsenal-training-878e3dc6/')),
    new Practice(new Date('8/22/2022'), new Link('https://app.veo.co/matches/20220823-082222-columbia-arsenal-training-e905dd1c/')),
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
