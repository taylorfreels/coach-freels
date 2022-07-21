export class Link {
  name: string;
  value: string;
  isAngularRoute: boolean;

  constructor(name: string, value: string, isAngularRoute: boolean = false) {
    this.name = name;
    this.value = value;
    this.isAngularRoute = isAngularRoute;
  }
}
