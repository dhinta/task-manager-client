import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProjectInfo } from '../../models/project-info';

@Component({
  selector: 'tm-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent implements OnInit {

  @Input() projects: ProjectInfo[];
  @Output() projectIndexChange: EventEmitter<number>;
  constructor() {
    this.projectIndexChange = new EventEmitter();
  }

  ngOnInit() {
  }

  switchProject (index: number) {
    this.projectIndexChange.emit(index);
  }

}
