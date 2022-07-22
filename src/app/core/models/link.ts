export class Link {
  value: string;
  name?: string;
  isAngularRoute: boolean;
  queryParams: any;

  constructor(value: string, name?: string, isAngularRoute: boolean = false, queryParams?: any) {
    this.value = value;
    this.name = name;
    this.isAngularRoute = isAngularRoute;
    this.queryParams = queryParams;
  }
}
