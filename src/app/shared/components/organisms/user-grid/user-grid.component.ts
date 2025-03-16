import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css'],
})
export class UserGridComponent implements OnInit {
  users: User[] = [];
  selectedRole: string = ''; // Role filter
  roles = ['admin', 'user']; // Example roles
  selectedSortOrder: string = 'asc';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers(); // Call the fetchUsers method on component load
  }

  // Fetch users from the backend
  fetchUsers(): void {
    if (this.selectedRole) {
      this.userService.getUsersByRole(this.selectedRole).subscribe(
        (users) => {
          this.users = users; // Update the users list with filtered data
        },
        (error) => {
          console.error('Error fetching users:', error); // Handle error
        }
      );
    } else {
      this.userService.getUsersSortedByAge(this.selectedSortOrder).subscribe(
        (data: User[]) => {
          this.users = data;
        },
        (error) => {
          console.error('Error fetching users sorted by age', error); 
        }
      );
    }
  }

  // Handle role selection change
  onRoleChange(event: Event): void {
  const value = (event.target as HTMLSelectElement).value;
    this.selectedRole = value; // Update selected role
    this.fetchUsers(); // Re-fetch users based on the selected role
  }

  onSortOrderChange(event: any): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedSortOrder = value;
    this.fetchUsers();
  }
}
