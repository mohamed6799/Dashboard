import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent  implements OnInit{

  Courses:any;
  
  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(res:any)=> this.Courses = res.Courses,
      error:(err:any)=>console.log(err)
    })
  }

}
