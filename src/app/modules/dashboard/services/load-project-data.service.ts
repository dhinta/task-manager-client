import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Response } from '../../../modules/shared/models/common';
import { ProjectService } from './project.service';

@Injectable()
export class LoadProjectDataService implements Resolve<Observable<Response>> {

  constructor(private projectService: ProjectService) { }

  resolve () {
    return this.projectService.getDashboardData();
  }
}
