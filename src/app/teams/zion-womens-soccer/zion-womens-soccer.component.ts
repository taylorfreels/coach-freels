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
    new Game(new Date('10/2/2023'), 'Zion vs Webb', new Link('https://app.veo.co/matches/20231003-100223-zion-vs-webb-2ca8cb44/')),
    new Game(new Date('9/28/2023'), 'Zion @ Culleoka', new Link('https://app.veo.co/matches/20230929-092823-zion-culleoka-506be982/')),
    new Game(new Date('9/14/2023'), 'Zion @ Cascade', new Link('https://app.veo.co/matches/20230914-091423-zion-cascade-fabf2d95/')),
    new Game(new Date('9/11/2023'), 'Zion @ Richland', new Link('https://app.veo.co/matches/20230912-091123-zion-vs-richland-43cfa955/')),
    new Game(new Date('9/7/2023'), 'Zion vs Cascade', new Link('https://app.veo.co/matches/20230908-090723-zion-vs-cascade-c532a57b/')),
    new Game(new Date('9/5/2023'), 'Zion @ Forrest', new Link('https://app.veo.co/matches/20230906-090523-zion-forrest-f523386f/')),
    new Game(new Date('8/31/2023'), 'Zion vs Loretto', new Link('https://app.veo.co/matches/20230901-083123-zion-vs-loretto-8bdacabc/')),
    new Game(new Date('8/22/2023'), 'Zion vs Forrest', new Link('https://app.veo.co/matches/20230823-zion-vs-forrest-082223-58cfe9a2/')),
    new Game(new Date('8/17/2023'), 'Zion @ Columbia Academy', new Link('https://app.veo.co/matches/20230818-zion-at-columbia-academy-c5d5026b/')),
    new Game(new Date('8/14/2023'), 'Zion @ Webb', new Link('https://app.veo.co/matches/20230815-zion-webb-081423-6e3fb5ab/')),
    new Game(new Date('1/11/2023'), 'Zion Cup 2023', new Link('https://app.veo.co/matches/20230111-zion-cup-2023-32ce6649/')),
    new Game(new Date('9/30/2022'), 'Zion vs Webb', new Link('https://app.veo.co/matches/20221001-093022-zion-vs-webb-b8b9317e/')),
    new Game(new Date('9/26/2022'), 'Zion vs Columbia Academy', new Link('https://app.veo.co/matches/20220927-092622-zion-vs-columbia-academy-0fb8910d/')),
    new Game(new Date('9/22/2022'), 'Zion JV vs East Hickman JV', new Link('https://app.veo.co/matches/20220923-092222-zion-jv-vs-east-hickman-jv-bbc29257/')),
    new Game(new Date('9/22/2022'), 'Zion vs East Hickman', new Link('https://app.veo.co/matches/20220923-092222-zion-vs-east-hickman-d54861d1/')),
    new Game(new Date('9/7/2022'), 'Zion vs Culleoka', new Link('https://app.veo.co/matches/20220909-090822-zion-vs-culleoka-6f3fa53c/')),
    new Game(new Date('9/6/2022'), 'Zion vs Forrest', new Link('https://app.veo.co/matches/20220907-090622-zion-forrest-e362007a/')),
    new Game(new Date('8/30/2022'), 'Zion JV vs Loretto', new Link('https://app.veo.co/matches/20220831-083022-zion-jv-vs-loretto-b816d053/')),
    new Game(new Date('8/23/2022'), 'Zion @ Richland', new Link('https://app.veo.co/matches/20220824-082322-zion-richland-56eb6711/')),
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
    new Practice(new Date('9/1/2022'), new Link('https://app.veo.co/matches/20220901-090122-zion-jv-vs-zion-ms-8c187a30/')),
    new Practice(new Date('8/9/2022'), new Link('https://app.veo.co/matches/20220809-080922-zion-wsoc-training/')),
    new Practice(new Date('8/8/2022'), new Link('https://app.veo.co/matches/20220808-080822-zion-wsoc-training/')),
    new Practice(new Date('8/5/2022'), new Link('https://app.veo.co/matches/20220805-080522-zion-wsoc-training/')),
    new Practice(new Date('7/28/2022'), new Link('https://app.veo.co/matches/20220728-zion-wsoc-training-072822/'))
  ];
  private closedPractices: Practice[] = [
    ...this.openPractices,
    new Practice(new Date('9/7/2022'), new Link('https://app.veo.co/matches/20220907-090722-zion-wsoc-training-a2ba017e/')),
    new Practice(new Date('8/24/2022'), new Link('https://app.veo.co/matches/20220824-082422-zion-wsoc-training-aeeb6df5/')),
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
