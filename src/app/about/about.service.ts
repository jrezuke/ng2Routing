import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
  public visitor: string;

  constructor() {
    console.log("AboutService.constructor");
  }

}
