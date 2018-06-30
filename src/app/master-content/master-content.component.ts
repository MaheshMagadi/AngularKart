import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {AgGridModule} from 'ag-grid-angular/main';

@Component({
  selector: 'app-master-content',
  templateUrl: './master-content.component.html',
  styleUrls: ['./master-content.component.css']
})
export class MasterContentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router) { }
  
  ngOnInit() {
   // let id = this.route.snapshot.paramMap.get('id');
   // alert(id);
  }

}




