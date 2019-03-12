import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Response } from '../../../../modules/shared/models/common';
import { ProjectInfo } from '../../models/project-info';

@Component({
  selector: 'tm-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public dashboardData: ProjectInfo[];
  public activeProjectIndex: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activeProjectIndex = 0;
    this.dashboardData = [];
    this.activatedRoute.parent.parent.data.subscribe(res => console.warn(res), err => console.log(err));
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      if (res.projectData.data.dashboard && res.projectData.data.dashboard.length) {
        this.dashboardData = res.projectData.data.dashboard;
      }
    });
  }

  onProjectIndexUpdate (projectIndex: number) {
    this.activeProjectIndex = projectIndex;
  }
}
