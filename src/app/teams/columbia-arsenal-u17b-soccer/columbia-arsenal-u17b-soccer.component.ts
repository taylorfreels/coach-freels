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
    new Game(new Date('10/29/2023'), '2006 Arsenal vs Camp Forest FC 06', new Link('https://app.veo.co/matches/20231029-102923-2006-arsenal-vs-camp-forest-fc-06-fe252785/')),
    new Game(new Date('10/28/2023'), '2006 Arsenal vs Aris FC 2007 Boys Black', new Link('https://app.veo.co/matches/20231028-102723-2006-arsenal-vs-aris-fc-2007-boys-black-0b570d9b/')),
    new Game(new Date('10/28/2023'), '2006 Arsenal vs Wilson United SC 2006 Boys Black', new Link('https://app.veo.co/matches/20231028-102823-2006-arsenal-vs-wusc-2006-boys-black-ec468359/')),
    new Game(new Date('10/7/2023'), '2006 Arsenal @ JSC 2006 Boys', new Link('https://app.veo.co/matches/20231007-100723-2006-arsenal-jsc-2006-boys-6a89b9bc/')),
    new Game(new Date('10/1/2023'), '2006 Arsenal @ TSC Nashville 2006 Boys Premier', new Link('https://app.veo.co/matches/20231001-100123-2006-arsenal-tsc-nashville-2006-boys-premier-9815ccd3/')),
    new Game(new Date('9/17/2023'), '2006 Arsenal vs TUSC 2006 Boys Red', new Link('https://app.veo.co/matches/20230917-091723-2006-arsenal-vs-tusc-2006-boys-red-2357501b/')),
    new Game(new Date('9/10/2023'), '2006 Arsenal vs Pateadores U18 Yellow', new Link('https://app.veo.co/matches/20230910-091023-2006-arsenal-vs-pateadores-u18-yellow-4271663c/')),
    new Game(new Date('9/2/2023'), '2006 Arsenal vs Midsouth Futbol 2007/2006', new Link('https://app.veo.co/matches/20230902-090223-2006-arsenal-vs-midsouth-futbol-20072006-f4df9735/')),
    new Game(new Date('10/2/2022'), 'Columbia Arsenal vs Lobos Rush Elite', new Link('https://app.veo.co/matches/20221002-100222-columbia-arsenal-vs-lobos-91d58651/')),
    new Game(new Date('10/1/2022'), 'Columbia Arsenal vs Music City FC Premier', new Link('https://app.veo.co/matches/20221002-100122-columbia-arsenal-vs-music-city-395ba177/')),
    new Game(new Date('9/25/2022'), 'Columbia Arsenal vs TSC Premier', new Link('https://app.veo.co/matches/20220926-092522-columbia-arsenal-vs-tsc-premier-167357e1/')),
    new Game(new Date('9/17/2022'), 'Columbia Arsenal vs Albion SC Nashville', new Link('https://app.veo.co/matches/20220918-091722-columbia-arsenal-vs-albion-sc-20bef710/')),
    new Game(new Date('9/10/2022'), 'Columbia Arsenal @ TSC Showcase', new Link('https://app.veo.co/matches/20220911-091022-columbia-arsenal-tsc-showcase-9a28ed2a/')),
    new Game(new Date('9/3/2022'), 'Columbia Arsenal vs Dickson Soccer', new Link('https://app.veo.co/matches/20220903-090322-columbia-arsenal-vs-dcs-640965c3/')),
    new Game(new Date('8/28/2022'), 'Columbia Arsenal @ Padedores 06 Yellow', new Link('https://app.veo.co/matches/20220828-082822-columbia-arsenal-patedores-476d743e/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('8/31/2023'), new Link('https://app.veo.co/matches/20230901-083123-c5318894/'))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    new Practice(new Date('9/19/2022'), new Link('https://app.veo.co/matches/20220919-091922-columbia-arsenal-training-02a5a814/')),
    new Practice(new Date('9/12/2022'), new Link('https://app.veo.co/matches/20220913-091222-columbia-arsenal-training-8422e688/')),
    new Practice(new Date('9/1/2022'), new Link('https://app.veo.co/matches/20220902-090122-columbia-arsenal-training-7e202d27/')),
    new Practice(new Date('8/25/2022'), new Link('https://app.veo.co/matches/20220826-082522-columbia-arsenal-training-878e3dc6/')),
    new Practice(new Date('8/22/2022'), new Link('https://app.veo.co/matches/20220823-082222-columbia-arsenal-training-e905dd1c/')),
    new Practice(new Date('8/18/2022'), new Link('https://app.veo.co/matches/20220819-081822-columbia-arsenal-training-fec0e9fb/')),
    new Practice(new Date('8/8/2022'), new Link('https://app.veo.co/matches/20220809-080822-columbia-arsenal-training/')),
    new Practice(new Date('8/4/2022'), new Link('https://app.veo.co/matches/20220805-080422-columbia-arsenal-training/')),
    new Practice(new Date('8/1/2022'), new Link('https://app.veo.co/matches/20220802-columbia-arsenal-training-080122/'))
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.practices = this.router.url.includes(hiddenRoute) ? this.closedPractices : this.openPractices;
  }
}
