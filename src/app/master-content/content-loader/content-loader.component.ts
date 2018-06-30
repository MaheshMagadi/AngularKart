import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { contents } from '../../content-source';

@Component({
  selector: 'app-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.css']
})
export class ContentLoaderComponent implements OnInit, OnDestroy{

  constructor(
  private route: ActivatedRoute,
  private router: Router) {
  }
 
 // private sampleVar = 3;
  private pages: any[] = contents;

 id: number;
 private sub:any;
  
  private about1 = this.route.snapshot.params['id'];
  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
  });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
