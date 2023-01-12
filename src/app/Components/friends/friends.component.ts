import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {

  Friends:any;
  
  constructor(private _DataService:DataService){}
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(res:any)=> this.Friends = res.Friends,
      error:(err:any)=>console.log(err)
    })
  }
  
}
