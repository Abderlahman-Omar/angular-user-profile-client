import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserApiService } from '../../services/user-api-service';
import { User } from '../../types/user';

@Component({
  selector: 'app-single-user',
  imports: [CommonModule, RouterModule],
  templateUrl: './single-user.html',
  styleUrl: './single-user.css'
})
export class SingleUser implements OnInit {
  userId!:number
  userDetails?:User
  isLoading = true;
  error: string | null = null;
  constructor(
    private userApiService:UserApiService,
    private activatedRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'))
    })
    this.getSingleUserData(this.userId)
  }
  private getSingleUserData(id:number):void{
    this.userApiService.getUserById(id).subscribe({
      next : (response) => {
        this.userDetails = response
        this.isLoading = false
      },
      error: (err) => {
        this.error = "failed to fetch users data"
        this.isLoading = false
      }
    })
  }
}
