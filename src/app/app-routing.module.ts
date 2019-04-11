import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HostpageComponent } from './hostpage/hostpage.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
{ path: 'hostpage', component: HostpageComponent
},
{ path: '', component: UserloginComponent
},
{ path: 'kitchen', component: KitchenComponent
},
{ path: 'manager', component: ManagerComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
