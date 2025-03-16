import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user: User | undefined;

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate([`/user/${id}`]);
  }
}
