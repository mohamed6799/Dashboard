import { Component , OnInit} from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit{

  Files:any;
  
  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(res:any)=> this.Files = res.Files,
      error:(err:any)=>console.log(err)
    })
  }
}
