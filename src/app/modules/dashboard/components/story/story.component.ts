import { Component, OnInit, Input } from '@angular/core';
import { StoryInfo } from '../../models/project-info';

@Component({
  selector: 'tm-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() story: StoryInfo;
  constructor() { }

  ngOnInit() {
  }

  addCard () {
    alert('add');
  }

}
