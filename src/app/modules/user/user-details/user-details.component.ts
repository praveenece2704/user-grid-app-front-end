import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(id).pipe(
      catchError(() => {
        this.errorMessage = 'Failed to load user details. Please try again later.';
        return of(undefined);
      })
    ).subscribe((data) => {
      if (data) {
        this.user = data;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
