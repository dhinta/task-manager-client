import { Injectable } from "@angular/core";
import { Observable, EMPTY } from "rxjs";
import { Resolve, Router } from "@angular/router";
import { retryWhen, delay, take, map } from "rxjs/operators";
import { iValidationRules } from "../models/common";
import { HttpService } from "./http.service";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ValidationRulesResolverService implements Resolve<Observable<iValidationRules>> {
  constructor(private http: HttpService, private router: Router) {}

  resolve(): Observable<iValidationRules> {
    let iHitCount: number = 1;
    return this.http.get(environment.URLs.APIEndPoint + "validation-rules.json").pipe(
      retryWhen(err => {
        return err.pipe(
          delay(1000),
          take(4),
          map(error => {
            if (++iHitCount === 5) {
              this.router.navigate(['/site-down',  {code: 'API'}]);
              return EMPTY;
            }
          })
        );
      })
    );
  }
}
