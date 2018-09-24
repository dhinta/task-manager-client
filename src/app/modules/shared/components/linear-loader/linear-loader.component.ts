import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../../services/loader.service";

@Component({
  selector: "tm-linear-loader",
  templateUrl: "./linear-loader.component.html",
  styleUrls: ["./linear-loader.component.scss"]
})
export class LinearLoaderComponent implements OnInit {

  public canShow: boolean;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    console.log('loader oninit')
    this.loaderService.get().subscribe(response => {
      console.log('From Loader: ', response);
      this.canShow = response.show;
    });
  }
}
