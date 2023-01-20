import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.component.html',
  styleUrls: ['./friends-profile.component.scss']
})
export class FriendsProfileComponent  implements OnInit{
  detailsDate:any;
  constructor(private _ActivatedRoute:ActivatedRoute ,private _DataService:DataService){}
  ngOnInit(): void {
     let idName = this._ActivatedRoute.snapshot.params['id'];
    this._DataService.getData().subscribe({
      next:(res:any)=>{
       this.detailsDate = res.Friends.filter((e:any)=> {if(e.id == idName) return e});
         
      },
      error:(err:any)=> console.log(err)
    })

  }
  
}
