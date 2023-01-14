import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  Plans:any;
  
  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(res:any)=> this.Plans = res.Plans,
      error:(err:any)=>console.log(err)
    })
  }

}
