import { Link } from "../../core/models/link";

export class Game {
  date: Date;
  opponent: string;
  link: Link;

  constructor(date: Date, opponent: string, link: Link) {
    this.date = date;
    this.opponent = opponent;
    this.link = link;
  }
}
