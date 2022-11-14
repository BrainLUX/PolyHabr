import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  navigateTo(destination: Destination, args: Map<string, string> = new Map()): void {
    let resultDestination = destination.toPath();
    args.forEach((value, key) => {
      resultDestination = resultDestination.replace(`:${key}`, value);
    });
    this.navigateByUrl(resultDestination);
  }

  navigateByUrl(url: string): void {
    this.router.navigateByUrl(url);
  }
}

export class Destination {
  static readonly FEED = new Destination("");
  static readonly SEARCH = new Destination("search");
  static readonly LOGIN = new Destination("login");

  private readonly path: string = "";

  constructor(path: string = "") {
    this.path = path;
  }

  public toPath(): string {
    return this.path;
  }
}
