import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about-2',
  templateUrl: './about-2.component.html',
  styleUrls: ['./about-2.component.css']
})
export class About2Component implements OnInit {
  serviceVisitor: string;

  constructor(private _aboutService: AboutService) { }

  ngOnInit() {
    this.serviceVisitor = this._aboutService.visitor;
  }

}
