import { HomePageComponent } from './home-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Required for HttpClient testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserGridComponent } from 'src/app/shared/components/organisms/user-grid/user-grid.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, UserGridComponent], // Declare UserGridComponent here
      imports: [HttpClientTestingModule], // Ensure HttpClientTestingModule is imported
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
