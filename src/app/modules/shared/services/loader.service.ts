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
    console.log("1")
    this.invokeCount = 0;
    this.loaderSubject = new Subject();
    this.loader = {
      show: false
    };
  }

  public get (): Observable<iLoader> {
    console.log("2")
    return this.loaderSubject.asObservable();
  }

  public invoked (canShow: boolean): void {
    canShow ? this.invokeCount++ : this.invokeCount--;
    console.log("3", this.invokeCount)
  }

  public next (): void {
    console.log("4")
    if(this.invokeCount === 0) {
      this.loader.show = false;
    } else {
      this.loader.show = true;
    }
  }

  public set (canShow: boolean): void {
    console.log("5")
    this.invoked(canShow);
    this.next();
    this.loaderSubject.next(this.loader);
  }
}
