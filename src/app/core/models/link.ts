export class Link {
  name: string;
  value: string;
  queryParams: any;
  isAngularRoute: boolean;

  constructor(name: string, value: string, isAngularRoute: boolean = false, queryParams?: any) {
    this.name = name;
    this.value = value;
    this.isAngularRoute = isAngularRoute;
    this.queryParams = queryParams;
  }
}
