import { Component, OnInit, Input } from '@angular/core';

import { ProjectInfo } from '../../models/project-info';

@Component({
  selector: 'tm-board-body',
  templateUrl: './board-body.component.html',
  styleUrls: ['./board-body.component.scss']
})
export class BoardBodyComponent implements OnInit {

  @Input() projects: ProjectInfo[];
  @Input() activeProjectIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
