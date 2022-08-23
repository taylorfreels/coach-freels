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
    new Game(new Date('8/19/2022'), 'Zion @ BGA', new Link('https://app.veo.co/matches/20220819-155321-d3a26ae8/')),
    new Game(new Date('8/13/2022'), 'Zion vs McEwen (Playday)', new Link('https://app.veo.co/matches/20220813-081322-zion-vs-mcewen/')),
    new Game(new Date('8/13/2022'), 'Zion JV vs East Hickman JV (Playday)', new Link('https://app.veo.co/matches/20220813-081322-zion-jv-vs-ehhs-jv-playday/')),
    new Game(new Date('8/13/2022'), 'Zion vs Hickman (Playday)', new Link('https://app.veo.co/matches/20220813-081322-zion-vs-hickman-playday/')),
    new Game(new Date('8/13/2022'), 'Zion vs East Hickman (Playday)', new Link('https://app.veo.co/matches/20220813-081322-zion-vs-ehhs-playday/')),
    new Game(new Date('8/11/2022'), 'Zion @ Culleoka', new Link('https://app.veo.co/matches/20220812-081122-zion-culleoka/')),
    new Game(new Date('7/22/2022'), 'Zion vs Central (7v7)', new Link('https://app.veo.co/matches/20220723-zion-vs-central-072222-90f6ee3d/')),
    new Game(new Date('7/22/2022'), 'Zion vs Spring Hill (7v7)', new Link('https://app.veo.co/matches/20220723-zion-vs-spring-hill-072222/')),
    new Game(new Date('7/22/2022'), 'Zion vs Central (7v7)', new Link('https://app.veo.co/matches/20220723-zion-vs-central-072222/')),
    new Game(new Date('7/20/2022'), 'Zion vs Spring Hill (7v7)', new Link('https://app.veo.co/matches/20220721-072022-zion-vs-spring-hill/')),
    new Game(new Date('7/20/2022'), 'Zion vs Shelbyville (7v7)', new Link('https://app.veo.co/matches/20220721-072022-zion-vs-shelbyville/')),
    new Game(new Date('7/20/2022'), 'Zion vs Fairview (7v7)', new Link('https://app.veo.co/matches/20220721-072022-zion-vs-fairview/'))
  ];
  public practices?: Practice[];

  private openPractices: Practice[] = [
    new Practice(new Date('8/9/2022'), new Link('https://app.veo.co/matches/20220809-080922-zion-wsoc-training/')),
    new Practice(new Date('8/8/2022'), new Link('https://app.veo.co/matches/20220808-080822-zion-wsoc-training/')),
    new Practice(new Date('8/5/2022'), new Link('https://app.veo.co/matches/20220805-080522-zion-wsoc-training/')),
    new Practice(new Date('7/28/2022'), new Link('https://app.veo.co/matches/20220728-zion-wsoc-training-072822/'))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    new Practice(new Date('8/22/2022'), new Link('https://app.veo.co/matches/20220822-082222-zion-wsoc-training-6adc1f6f/')),
    new Practice(new Date('8/18/2022'), new Link('https://app.veo.co/matches/20220818-081822-zion-wsoc-training-195486a4/')),
    new Practice(new Date('8/17/2022'), new Link('https://app.veo.co/matches/20220817-081722-zion-wsoc-training-7612ab5d/')),
    new Practice(new Date('8/16/2022'), new Link('https://app.veo.co/matches/20220816-081622-zion-wsoc-training-b7c14da8/')),
    new Practice(new Date('8/4/2022'), new Link('https://app.veo.co/matches/20220804-080422-zion-wsoc-training/')),
    new Practice(new Date('8/3/2022'), new Link('https://app.veo.co/matches/20220803-080322-zion-wsoc-training/')),
    new Practice(new Date('8/2/2022'), new Link('https://app.veo.co/matches/20220802-zion-wsoc-training-080222/')),
    new Practice(new Date('7/29/2022'), new Link('https://app.veo.co/matches/20220729-072922-zion-wsoc-training/')),
    new Practice(new Date('7/25/2022'), new Link('https://app.veo.co/matches/20220725-zca-wsoc-training-072522/')),
    new Practice(new Date('7/22/2022'), new Link('https://app.veo.co/matches/20220722-072222-wsoc-training/')),
    new Practice(new Date('7/18/2022'), new Link('https://app.veo.co/matches/20220718-071822-zion-wsoc-training/'))
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.practices = this.router.url.includes(hiddenRoute) ? this.closedPractices : this.openPractices;
  }
}
