import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-site-down',
  templateUrl: './site-down.component.html',
  styleUrls: ['./site-down.component.scss']
})
export class SiteDownComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(data => console.log(data));
  }

}
