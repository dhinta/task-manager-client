import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BoardComponent } from './components/board/board.component';
import { LoadProjectDataService } from './services/load-project-data.service';
import { ProjectService } from './services/project.service';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { BoardBodyComponent } from './components/board-body/board-body.component';
import { StoryComponent } from './components/story/story.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    BoardComponent,
    BoardHeaderComponent,
    BoardBodyComponent,
    StoryComponent,
    TaskComponent
  ],
  providers: [
    LoadProjectDataService,
    ProjectService
  ]
})
export class DashboardModule { }
