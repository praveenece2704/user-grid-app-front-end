import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserDetailsComponent } from './modules/user/user-details/user-details.component';
import { UserGridComponent } from './shared/components/organisms/user-grid/user-grid.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'user-details/:id', component: UserDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
