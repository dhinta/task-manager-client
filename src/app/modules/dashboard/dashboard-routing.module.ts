import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { LoadProjectDataService } from './services/load-project-data.service';

const routes: Routes = [{
  path: '',
  component: BoardComponent,
  resolve: {
    projectData: LoadProjectDataService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
