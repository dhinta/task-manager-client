import { Component, OnInit, Input } from '@angular/core';
import { TaskInfo } from '../../models/project-info';

@Component({
  selector: 'tm-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskInfo;
  constructor() { }

  ngOnInit() {
  }

}
