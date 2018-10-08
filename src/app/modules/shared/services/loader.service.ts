import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { iLoader } from './../models/common';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject: Subject<iLoader>;
  private invokeCount: number;
  private loader: iLoader;

  constructor() {
    this.invokeCount = 0;
    this.loaderSubject = new Subject();
    this.loader = {
      show: false
    };
  }

  public get (): Observable<iLoader> {
    return this.loaderSubject.asObservable();
  }

  public invoked (canShow: boolean): void {
    canShow ? this.invokeCount++ : this.invokeCount--;
  }

  public next (): void {
    if(this.invokeCount === 0) {
      this.loader.show = false;
    } else {
      this.loader.show = true;
    }
  }

  public set (canShow: boolean): void {
    this.invoked(canShow);
    this.next();
    this.loaderSubject.next(this.loader);
  }
}
