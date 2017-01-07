import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  serviceVisitor: string;
  constructor(private _aboutService: AboutService) { }

  ngOnInit() {

  }

}
