import { Link } from "../../core/models/link";

export class Practice {
  date: Date;
  link: Link;

  constructor(date: Date, link: Link) {
    this.date = date;
    this.link = link;
  }
}
