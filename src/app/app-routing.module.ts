import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SERVICESComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [

  {
    path : 'app-home',
    component : HomeComponent,
  },
  {
    path : 'app-about',
    component : AboutComponent,
  },
  {
    path : 'app-services',
    component :  SERVICESComponent,
  },
  {
    path : 'app-work',
    component : WorkComponent
  },
  {
    path : 'app-blog',
    component : BlogComponent,
  },
  {
    path : 'app-contact',
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
