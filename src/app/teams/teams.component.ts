import { Component, OnInit } from '@angular/core';

import { Link } from '../core/models/link';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public teamLinks: Link[] = [
    new Link('Zion Woman\'s Soccer', '/zion-womens-soccer', true),
    new Link('Zion Men\'s Soccer', '/zion-mens-soccer', true),
    new Link('Columbia Arsenal U17B Soccer', '/columbia-arsenal-u17b-soccer', true)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
