import { Component, OnInit } from '@angular/core';

import { hiddenRoute, teamRoutes } from '../app-routing.module'
import { Link } from '../core/models/link';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public teamLinks: Link[] = teamRoutes.map(x => new Link(x.data!['name'], `/${x.path}`, true, { type: hiddenRoute }));

  constructor() { }

  ngOnInit(): void {
  }

}
