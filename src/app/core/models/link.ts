export class Link {
  name?: string;
  value: string;
  queryParams: any;
  isAngularRoute: boolean;

  constructor(value: string, name?: string, isAngularRoute: boolean = false, queryParams?: any) {
    this.name = name;
    this.value = value;
    this.isAngularRoute = isAngularRoute;
    this.queryParams = queryParams;
  }
}
