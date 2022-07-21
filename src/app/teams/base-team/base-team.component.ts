import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../models/game';
import { Practice } from '../models/practice';

@Component({
  selector: 'app-base-team',
  templateUrl: './base-team.component.html',
  styleUrls: ['./base-team.component.scss']
})
export class BaseTeamComponent implements OnInit {
  @Input() header!: string;
  @Input() games?: Game[];
  @Input() practices?: Practice[];

  constructor() { }

  ngOnInit(): void {
    this.games?.sort((a, b) => b.date.getTime() - a.date.getTime());
    this.practices?.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

}
