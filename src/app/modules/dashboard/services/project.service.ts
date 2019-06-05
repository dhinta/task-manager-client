
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { DashboardModule } from './../dashboard.module';
import { HttpService } from '../../shared/services/http.service';
import { Response } from '../../../modules/shared/models/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpService: HttpService) { }

  getDashboardData (): Observable<Response> {
    return this.httpService.get( environment.URLs.APIEndPoint + 'project/dashboard' );
  }
}
