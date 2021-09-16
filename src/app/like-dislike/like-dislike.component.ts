import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count:number=0;
    likes: number=100;
  dislikes: number=25;
  likeStatus: boolean=false;
  dislikeStatus: boolean=false;
  hiddenLike: boolean=false;

  likeID:number=1;

  likeClicked(){
    this.likeID=1;
    this.likeStatus=true;
    this.likes++;
    //this.likeClickedDec();
  }

  likeClickedDec(){
    this.likeID=0;
    this.likes--;
  }


  declike(){
    if(this.likeStatus)
      this.likes--;
  }

  dislikeClicked(){
    this.dislikeStatus=true;
    this.dislikes++;
  }


}
