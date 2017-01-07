import { Component, OnInit } from '@angular/core';
import { Router, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(router: Router) {
    console.log("router:", router);
    
    // let state: RouterState = router.routerState;
    // let snapshot: RouterStateSnapshot = state.snapshot;
    // console.log("state:", state);
    // console.log("snapshot:", snapshot);
    //...
  }


  ngOnInit() {
  }

}
