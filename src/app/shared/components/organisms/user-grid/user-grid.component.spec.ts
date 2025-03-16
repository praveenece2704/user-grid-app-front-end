import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridComponent } from './user-grid.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserGridComponent', () => {
  let component: UserGridComponent;
  let fixture: ComponentFixture<UserGridComponent>;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserGridComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(UserGridComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
