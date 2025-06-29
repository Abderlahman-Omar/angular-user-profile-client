import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api-service';
import { User } from '../../types/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-all-users',
  imports: [CommonModule, RouterModule],
  templateUrl: './all-users.html',
  styleUrl: './all-users.css'
})
export class AllUsers implements OnInit {
  allUsers:User[] = []
  isLoading = true;
  error: string | null = null;
  constructor(private userApiService : UserApiService){}
  ngOnInit(): void {
   this.getAllUsersData()
  }
  private getAllUsersData():void{
    this.userApiService.getAllUsers().subscribe({
      next : (response) => {
        this.allUsers = response
        this.isLoading = false
      },
      error: (err) => {
        this.error = "failed to fetch users data"
        this.isLoading = false
      }
    })
  }
}
