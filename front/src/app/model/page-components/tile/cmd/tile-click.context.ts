import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root' // Optional: Provides the service at the root level
  })
  export class TileClickContext{
      constructor(public router: Router){}
  }