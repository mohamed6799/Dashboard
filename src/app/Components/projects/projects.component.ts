import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent  implements OnInit{
  Projects:any;
  
  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(res:any)=> this.Projects = res.Projects,
      error:(err:any)=>console.log(err)
    })
  }
}
